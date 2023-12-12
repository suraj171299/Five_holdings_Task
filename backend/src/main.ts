import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationMiddleware } from './middleware/validation.middleware';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
