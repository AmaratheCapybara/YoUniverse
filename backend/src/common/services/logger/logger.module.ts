import { Module, Global } from '@nestjs/common';
import { LoggerService } from './logger.service';
import { LOGGER_SERVICE } from '@/utils/Constants';

@Global()
@Module({
	providers: [
		{
			provide: LOGGER_SERVICE,
			useClass: LoggerService
		}
	],
	exports: [LOGGER_SERVICE]
})
export class LoggerModule {}
