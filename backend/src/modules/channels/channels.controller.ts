import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { ChannelsService } from './channels.service';
import { CreateChannelDTO } from './dto/create-channel.dto';

@Controller('channels')
export class ChannelsController {
  constructor(private readonly channelsService: ChannelsService) {}

  @Get()
  async getAllChannels(@Query('type') type?: string) {
    return this.channelsService.getAllChannels(type);
  }

  @Get(':id')
  async getChannelByID(@Param('id') id: number) {
    return this.channelsService.getChannelByID(id);
  }

  @Post()
  async createChannel(@Body() createChannelDto: CreateChannelDTO) {
    return this.channelsService.createChannel(createChannelDto);
  }
}
