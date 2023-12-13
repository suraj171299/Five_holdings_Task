import { IsEmail,IsInt,IsString, IsNotEmpty, Length } from "class-validator";

export class CreatedUser{
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @Length(10)
    phoneNumber: string;

    @IsEmail(null, {message:'Please provide a valid email'})
    @IsNotEmpty()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsString()
    hobbies: string;
}