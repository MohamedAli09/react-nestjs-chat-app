import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { Logger } from 'nestjs-pino';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  app.useGlobalPipes(new ValidationPipe());
  app.useLogger(app.get(Logger)); // Use the Logger instance from the LoggerModule to log requests and responses
  const configService = app.get(ConfigService); // Get the ConfigService instance
  app.enableCors({
    origin: 'http://localhost:3002', // Your client port
    credentials: true,
  });
  await app.listen(configService.get('PORT') || 3000);
}
bootstrap();
