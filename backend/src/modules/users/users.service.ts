import { Injectable, HttpException, HttpStatus, Inject } from '@nestjs/common';
import { User } from './user.entity';
import { ChannelsService } from '../channels/channels.service';
import { MessagesService } from '../messages/messages.service';
import { CreateMessageDTO } from '../messages/dto/create-message.dto';
import { ChannelType, Errors, USERS_CACHE_KEY, USERS_REPOSITORY } from '@/utils/Constants';
import { UserTokenResponseDTO } from './dto/user-token-response.dto';
import { JwtPayload } from '@/typings';
import { sign } from 'jsonwebtoken';
import { UserLoginRequestDTO } from './dto/user-login-request.dto';
import { ConfigService } from '@nestjs/config';
import { randomBytes } from 'crypto';
import { UserRegisterRequestDTO } from './dto/user-register-request.dto';
import { CACHE_MANAGER, Cache } from '@nestjs/cache-manager';

@Injectable()
export class UsersService {
  private readonly jwtPrivateKey: string;

  constructor(
    @Inject(USERS_REPOSITORY) private readonly usersRepository: typeof User,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private readonly channelsService: ChannelsService,
		private readonly messagesService: MessagesService,
    private readonly configService: ConfigService
  ) {
    this.jwtPrivateKey = this.configService.get<string>('jwtPrivateKey') ?? 'jwtPrivateKey';
  }

  async findAllUsers(search?: string): Promise<User[]> {
    return this.usersRepository.findAll<User>({
      where: search ? { email: search } : {},
    });
  }


  async getUserByEmail(email: string): Promise<User> {
    const user = await this.usersRepository.findOne<User>({ where: { email } });

    if (!user) {
      throw new HttpException(`User with email ${email} not found`, HttpStatus.NOT_FOUND);
    }
    return user;
  }

  async create(createUserDTO: UserRegisterRequestDTO) {
		const searchOptions: any = { ...createUserDTO };
		delete searchOptions.password;
		if (searchOptions.email) {
			searchOptions.email = searchOptions.email.trim().toLowerCase();
		}

		const alreadyCreated = await this.usersRepository.findOne({ where: searchOptions, attributes: ['id', 'username', 'email'], raw: true });
		if (alreadyCreated) {
			throw new HttpException(
				{
					statusCode: HttpStatus.CONFLICT,
					message: `User with email '${createUserDTO.email}' already exists`,
					details: 'Please choose another email or login if this is your account'
				},
				HttpStatus.CONFLICT
			);
		}

		const userData = {
			...createUserDTO,
			...searchOptions,
			password: createUserDTO.password,
			emailVerificationToken: '',
			isEmailVerified: false
		};

		// const willSendMail = MailService.checkEnvironment();
		let verificationToken = '';

    if (false) {
		// if (willSendMail) {
			verificationToken = randomBytes(32).toString('hex');
			userData.emailVerificationToken = verificationToken;
		}
		else {
			userData.isEmailVerified = true;
		}

		const user = await this.usersRepository.create<User>(userData);

		// if (willSendMail) {
		//  	await this.mailService.sendVerificationEmail(user, verificationToken, process.env.APP_URL!);
		// }

		const token = await this.signToken(user.dataValues ?? user);

		await this.cacheManager.del(USERS_CACHE_KEY);

		return new UserTokenResponseDTO({ user, token });
	}

  async login(userLoginRequestDTO: UserLoginRequestDTO) {
		const username = userLoginRequestDTO.username;
		const password = userLoginRequestDTO.password;

		const user = await this.usersRepository.findOne<User>({
			where: { username },
			attributes: {
				include: ['password']
			}
		});

		if (!user) {
			throw new HttpException(Errors.INVALID_USERNAME(), HttpStatus.UNAUTHORIZED);
		}

		const isMatch = await user.isCorrectPassword(password);
		if (!isMatch) {
			throw new HttpException(Errors.INVALID_USER_PASSWORD(), HttpStatus.UNAUTHORIZED);
		}

		const token = await this.signToken(user.dataValues ?? user);

		return new UserTokenResponseDTO({ user, token });
	}

  async dm(authorID: number, recipientID: number, createMessageDto: Omit<CreateMessageDTO, 'channelID'>) {
    let dmChannel = await this.channelsService.findDMChannel(authorID, recipientID);

    if (!dmChannel) {
      dmChannel = await this.channelsService.createChannel({
        name: `dm-${authorID}-${recipientID}`, // This is used for finding channels, do not change
        channelType: ChannelType.DM,
      });
    }

    return this.messagesService.sendMessage({ channelID: dmChannel.id, ...createMessageDto, authorID: authorID });
  }

  async getUserChannels(userID: number) {
    return this.channelsService.getUserChannels(userID);
  }

  private async signToken(payload: JwtPayload | User) {
		return sign({ ...((payload as User).dataValues ?? payload) }, this.jwtPrivateKey, { expiresIn: '1h' });
	}
}
