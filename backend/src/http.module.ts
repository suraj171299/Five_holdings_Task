import { Module} from '@nestjs/common';
import { UserController } from './users/user.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [UserController],
  exports:[HttpModule],
})
export class CustomHttpModule {}