import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ValidationMiddleware } from './middleware/validation.middleware';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserController } from './users/user.controller';
import { UserService } from './users/user.service';
import { UserModule} from './users/user.module';
import { UserRepository } from './users/user.repository';

const UserTable = require('../test/ormconfig.js');

@Module({
  imports: [TypeOrmModule.forRoot(UserTable),UserModule,HttpModule],
  providers: [AppService],
  controllers: [AppController]
})
export class AppModule {}