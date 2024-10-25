import { IsDate, IsDateString, IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    username: string
    
    @IsNotEmpty()
    @IsString()
    password: string

    @IsNotEmpty()
    @IsString()
    fullname: string

    @IsOptional()
    @IsDateString()
    birthDate: Date
}
