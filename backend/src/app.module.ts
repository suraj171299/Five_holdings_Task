import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ValidationMiddleware } from './middleware/validation.middleware';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ValidationMiddleware).forRoutes('*');
  }
}