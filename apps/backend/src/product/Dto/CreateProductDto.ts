import { ArrayMinSize, IsArray, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateProductDto{
    @IsString()
    @IsNotEmpty()
    name : string

    @IsString()
    @IsOptional()
    description: string

    @IsNotEmpty()
    @IsNumber()
    price: number

    @IsArray()
    @IsString({each: true})
    @ArrayMinSize(1)
    imageUrls: string[]

    @IsString()
    category: string
}