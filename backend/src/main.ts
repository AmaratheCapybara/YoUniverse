import { join } from 'path';
import { NestFactory } from '@nestjs/core';
import autoLoad from '@fastify/autoload';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { ConfigService } from '@nestjs/config';
import { patchNestJsSwagger } from 'nestjs-zod';

import { setupSwagger } from '@/swagger';
import { ZodValidationPipe } from './common/pipes/validation.pipe';
import { SequelizeExceptionFilter } from './common/exceptions/sequelize.exception';
import { LoggerService } from './common/services/logger/logger.service';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { AllExceptionsFilter } from './common/filters/global-exception.filter';

async function bootstrap() {
  const logger = new LoggerService('Bootstrapper');

  const fastify = new FastifyAdapter();

  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    fastify,
  );

  // Global middleware, pipes, etc. can be set up here
  patchNestJsSwagger();
  setupSwagger(app);

  app.useGlobalPipes(new ZodValidationPipe());
  app.useLogger(logger);
  app.useGlobalFilters(
    new HttpExceptionFilter(),
    new SequelizeExceptionFilter(new LoggerService()),
    new AllExceptionsFilter()
  );
  // End setup

  await fastify.register(autoLoad as any, {
    dir: join(__dirname, 'common', 'plugins')
  });

  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT') ?? 5000;

  await app.listen(port, '0.0.0.0');

  console.log(`Server running on port ${port}`);
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrap();
