import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpService } from '@nestjs/axios';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const http = app.get(HttpService)
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
