import { IsNumber, IsOptional, IsString } from "class-validator"

export class CreateAdminDto {

    @IsString()
    username: string

    @IsString()
    password: string

    @IsOptional()
    @IsNumber()
    role?:number
}
