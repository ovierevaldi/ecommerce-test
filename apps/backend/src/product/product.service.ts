import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './Dto/create-product.dto';
import { Product } from '@prisma/client';
import { UpdateProductDto } from './Dto/update-product.dto';

@Injectable()
export class ProductService {
    constructor(private prismaService: PrismaService){
    }

    async createProduct(createProductDto:  CreateProductDto): Promise<Product>{
        return await this.prismaService.product.create({data: createProductDto})
    }

    async findAll(): Promise<Product[]>{
        return await this.prismaService.product.findMany();
    }

    async findOne(productId: number): Promise<Product>{
        return await this.prismaService.product.findUnique({where: {id: productId}});
    }

    async update(productId: number, updateProductDto: UpdateProductDto): Promise<Product>{
        return await this.prismaService.product.update({where: {id: productId}, data: updateProductDto});
    }

    async delete(productId: number): Promise<Product>{
        return await this.prismaService.product.delete({where: {id: productId}});
    }
}
