import { Injectable, HttpException, HttpStatus, Inject, forwardRef } from '@nestjs/common';
import { Message } from './message.entity';
import { CreateMessageDTO } from './dto/create-message.dto';
import { Channel } from '../channels/channel.entity';
import { User } from '../users/user.entity';
import { CHANNELS_REPOSITORY, MESSAGES_REPOSITORY } from '@/utils/Constants';

@Injectable()
export class MessagesService {
  constructor(
    @Inject(MESSAGES_REPOSITORY) private readonly messagesService: typeof Message,
    @Inject(forwardRef(() => CHANNELS_REPOSITORY)) private readonly channelsService: typeof Channel
  ) {}

  async getMessagesByChannel(channelID: number) {
    const channel = await this.channelsService.findByPk(channelID);

    if (!channel) {
      throw new HttpException(`Channel not found`, HttpStatus.NOT_FOUND);
    }

    return this.messagesService.findAll({ where: { channelID }, include: [User] });
  }

  async sendMessage(createMessageDto: CreateMessageDTO) {
    const { channelID, authorID } = createMessageDto;
    const channel = await this.channelsService.findByPk(channelID);

    if (!channel) {
      throw new HttpException(`Channel does not exist`, HttpStatus.BAD_REQUEST);
    }

    return this.messagesService.create({ ...createMessageDto });
  }

  async findByChannel(channelID: number) {
    return this.getMessagesByChannel(channelID);
  }
}
