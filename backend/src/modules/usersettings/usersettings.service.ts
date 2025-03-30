import { Injectable, HttpException, HttpStatus, Inject } from '@nestjs/common';
import { UserSettings } from './usersettings.entity';
import { UserSettingsDTO } from './dto/usersettings.dto';
import { USERSETTINGS_REPOSITORY } from '@/utils/Constants';

@Injectable()
export class UsersettingsService {
  constructor(
    @Inject(USERSETTINGS_REPOSITORY) private readonly userSettingsRepository: typeof UserSettings,
  ) {}

  async getUserSettings(userID: number): Promise<UserSettingsDTO> {
    const settings = await this.userSettingsRepository.findOne({ where: { userID } });

    if (!settings) {
      throw new HttpException(`User settings not found for ID ${userID}`, HttpStatus.NOT_FOUND);
    }

    return new UserSettingsDTO(settings);
  }

  async updateUserSettings(userID: number, updateUserSettingsDto: Partial<UserSettingsDTO>): Promise<UserSettingsDTO> {
    const [updated] = await this.userSettingsRepository.update(updateUserSettingsDto, {
      where: { userID },
      returning: true,
    });

    if (!updated) {
      throw new HttpException('User settings update failed', HttpStatus.BAD_REQUEST);
    }

    return this.getUserSettings(userID);
  }
}
