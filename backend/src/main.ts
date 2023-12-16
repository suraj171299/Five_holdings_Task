import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpService } from '@nestjs/axios';
import { ValidationPipe } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const http = app.get(HttpService)
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe({ transform : true }))
  await app.listen(3000);
}
bootstrap();
