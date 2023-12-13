import { IsEmail,IsInt,IsString, IsNotEmpty, Length } from "class-validator";

export class CreatedUser{

    id: number;
    @IsString()
    @IsNotEmpty({message:'Please provide a valid name'})
    name: string;

    @IsNotEmpty({message:'Please provide a valid phone-number'})
    @Length(10)
    phoneNumber: string;

    @IsEmail()
    @IsNotEmpty({message:'Please provide a valid email'})
    @IsString()
    email: string;

    @IsNotEmpty({message:'Please provide a valid input'})
    @IsString()
    hobbies: string;
}