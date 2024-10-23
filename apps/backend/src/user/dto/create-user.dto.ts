import { IsDate, IsDateString, IsOptional, IsString } from "class-validator"

export class CreateUserDto {
    
    @IsString()
    username: string
    
    @IsString()
    password: string

    @IsString()
    fullname: string

    @IsOptional()
    @IsDateString()
    birthDate: Date
}
