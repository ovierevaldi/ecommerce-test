import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Product, ProductCategory } from '@prisma/client';

@Injectable()
export class CategoryService {
  constructor(private prismaService: PrismaService)
  {}

  async create(createCategoryDto: CreateCategoryDto): Promise<ProductCategory> {
    return await this.prismaService.productCategory.create({data: createCategoryDto})
  }

  async findAll(): Promise<ProductCategory[]> {
    return await this.prismaService.productCategory.findMany();
  }

  async findOne(productID: number): Promise<ProductCategory> {
    return await this.prismaService.productCategory.findUnique({where: {id: productID}})
  }

  async update(productId: number, updateCategoryDto: UpdateCategoryDto): Promise<ProductCategory> {
    return await this.prismaService.productCategory.update({where: {id: productId}, data: updateCategoryDto});
  }

  async delete(productId: number): Promise<ProductCategory> {
    return await this.prismaService.productCategory.delete({where: {id: productId}})
  }
}
