import { Injectable, HttpException, HttpStatus, Inject, forwardRef, NotFoundException, ForbiddenException, Get, Param, Req, ParseIntPipe } from '@nestjs/common';
import { Channel } from './channel.entity';
import { CreateChannelDTO } from './dto/create-channel.dto';
import { Op } from 'sequelize';
import { CHANNELS_REPOSITORY, ChannelType, MESSAGES_REPOSITORY } from '@/utils/Constants';
import { Message } from '@/modules/messages/message.entity';
import { User } from '@/modules/users/user.entity';
import { CreateMessageDTO } from '../messages/dto/create-message.dto';
import type { AuthRequest } from '@/typings';

@Injectable()
export class ChannelsService {
  constructor(
    @Inject(CHANNELS_REPOSITORY) private readonly channelsService: typeof Channel,
    @Inject(forwardRef(() => MESSAGES_REPOSITORY)) private readonly messagesService: typeof Message,
  ) {}

  async getAllChannels(type?: string) {
    return this.channelsService.findAll(type ? { where: { type } } : {});
  }

  async getChannelByID(id: number) {
    const channel = await this.channelsService.findByPk(id);

    if (!channel) {
      throw new HttpException(`Channel not found`, HttpStatus.NOT_FOUND);
    }

    return channel;
  }

  async createChannel(createChannelDto: CreateChannelDTO) {
    return this.channelsService.create({ ...createChannelDto });
  }

  async findDMChannel(user1ID: number, user2ID: number) {
    return this.channelsService.findOne({
      where: {
        channelType: ChannelType.DM,
        name: {
          [Op.or]: [`dm-${user1ID}-${user2ID}`, `dm-${user2ID}-${user1ID}`],
        },
      },
    });
  }

  async getMessages(id: number, user: User): Promise<Message[]> {
    const channel = await this.channelsService.findByPk(id);
    if (!channel) throw new NotFoundException('Channel not found');

    if (channel.channelType !== ChannelType.PUBLIC && !this.isMember(user, channel)) {
      throw new ForbiddenException('Not allowed to view messages in this private channel');
    }

    return this.messagesService.findAll({
      where: { channel: { id: id } },
      include: [{ model: User, as: 'author' }, { model: Channel, as: 'channel' }],
      order: [['createdAt', 'ASC']],
    });
  }

  async getUserChannels(userID: number) {
    return this.channelsService.findAll({
      where: {
        channelType: {
          [Op.or]: [ChannelType.PUBLIC, ChannelType.DM],
        },
      },
    });
  }
  
  async createMessage(id: number, dto: CreateMessageDTO, author: User): Promise<Message> {
    const channel = await this.channelsService.findByPk(id);
    if (!channel) {
      throw new NotFoundException('Channel not found');
    }

    if (channel.channelType !== ChannelType.PUBLIC && !this.isMember(author, channel)) {
      throw new ForbiddenException('You do not have access to this private channel');
    }

    return this.messagesService.create({
      content: dto.content,
      author,
      channel,
    });
  }

  private isMember(user: User, channel: Channel): boolean {
    return true;
  }

    @Get(':id/messages')
    getChannelMessages(
      @Param('id', ParseIntPipe) channelId: number,
      @Req() req: AuthRequest,
    ) {
      return this.getMessages(channelId, req.user);
    }
}
