import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './Dto/CreateProductDto';
import { Product } from '@prisma/client';

@Injectable()
export class ProductService {
    constructor(private prismaService: PrismaService){
    }

    async createProduct(createProductDto:  CreateProductDto): Promise<Product>{
        return this.prismaService.product.create({data: createProductDto})
    }
}
