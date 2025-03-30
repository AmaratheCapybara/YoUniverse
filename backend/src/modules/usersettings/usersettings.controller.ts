import { Controller, Get, Put, Body, Param, UseGuards } from '@nestjs/common';
import { UsersettingsService } from './usersettings.service';
import { UserSettingsDTO } from './dto/usersettings.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@Controller('usersettings')
export class UsersettingsController {
  constructor(private readonly usersettingsService: UsersettingsService) {}

  @Get(':userID')
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  async getUserSettings(@Param('userID') userID: number) {
    return this.usersettingsService.getUserSettings(userID);
  }

  @Put(':userID')
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  async updateUserSettings(
    @Param('userID') userID: number,
    @Body() updateUserSettingsDto: Partial<UserSettingsDTO>
  ) {
    return this.usersettingsService.updateUserSettings(userID, updateUserSettingsDto);
  }
}
