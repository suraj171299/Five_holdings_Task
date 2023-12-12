import { IsEmail,IsInt,IsString, IsNotEmpty } from "class-validator";

export class UserDetails{
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    phoneNumber: number

    @IsEmail(null, {message:'Please provide a valid email'})
    @IsNotEmpty()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsString()
    hobbies: string;
}