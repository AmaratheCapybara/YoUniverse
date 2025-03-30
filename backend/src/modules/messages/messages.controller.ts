import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDTO } from './dto/create-message.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('messages')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Get(':channelID')
  async getMessagesByChannel(@Param('channelID') channelID: number) {
    return this.messagesService.getMessagesByChannel(channelID);
  }

  @Post()
  async sendMessage(@Body() createMessageDto: CreateMessageDTO) {
    return this.messagesService.sendMessage(createMessageDto);
  }
}
