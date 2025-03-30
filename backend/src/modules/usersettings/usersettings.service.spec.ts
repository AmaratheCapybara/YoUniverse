import { Test, TestingModule } from '@nestjs/testing';
import { UsersettingsService } from './usersettings.service';

describe('UsersettingsService', () => {
  let service: UsersettingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersettingsService],
    }).compile();

    service = module.get<UsersettingsService>(UsersettingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
