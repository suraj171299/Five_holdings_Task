import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule} from './users/user.module';


const UserTable = require('../test/ormconfig.js');

@Module({
  imports: [TypeOrmModule.forRoot(UserTable),UserModule,HttpModule],
  providers: [AppService],
  controllers: [AppController]
})
export class AppModule {}