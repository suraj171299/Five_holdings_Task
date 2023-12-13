import { Controller, Get, Post, Body, Param, Delete,Put, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../entities/user.entity';
import { CreatedUser } from '../user_details/user.details'
import * as nodemailer from 'nodemailer';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post()
  async create(@Body(new ValidationPipe()) user: CreatedUser): Promise<User> {
    if(user.id){
      console.log('insideupdate');
      const updatedUser = await this.userService.updateById(user.id,user);
      return new User;
    }
    else{
      const savedUser = await this.userService.create(user);
      console.log(user);
    
    this.sendEmailNotification(savedUser);

    return savedUser;
    }
  }
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const userId = parseInt(id, 10);
    const deletedUser = await this.userService.delete(userId);
    return deletedUser;
  }
  @Post('send-email')
  async sendEmailNotification(@Body() user: User): Promise<void> {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      auth: {
        user: 'taskdemo17@gmail.com',
        pass: 'hlml yjsg qeeq coec',
      },
    });

    const mailOptions = {
      from: 'taskdemo17@gmail.com',
      to: 'surajpadalkar1712@gmail.com',
      subject: 'New User Created',
      text: `Here are your User Details:\n\nName: ${user.name}\nPhone Number: ${user.phoneNumber}\nEmail: ${user.email}\nHobbies: ${user.hobbies}`,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error('Error sending email:', err);
      } else {
        console.log('Email sent:', info.response);
      }
    });
  }
}
