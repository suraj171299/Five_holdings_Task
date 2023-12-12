import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../entities/user.entity';
import * as nodemailer from 'nodemailer';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post()
  async create(@Body() user: User): Promise<User> {
    const savedUser = await this.userService.create(user);

    this.sendEmailNotification(savedUser);

    return savedUser;
  }

  private sendEmailNotification(user: User): void {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'email@gmail.com',
        pass: 'email_password',
      },
    });

    const mailOptions = {
      from: 'your_email@gmail.com',
      to: 'recipient_email@example.com',
      subject: 'New User Created',
      text: `A new user has been created:\n\nName: ${user.name}\nPhone Number: ${user.phoneNumber}\nEmail: ${user.email}\nHobbies: ${user.hobbies}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
      } else {
        console.log('Email sent:', info.response);
      }
    });
  }
}
