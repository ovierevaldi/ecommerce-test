import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './Dto/create-product.dto';
import { Product } from '@prisma/client';
import { UpdateProductDto } from './Dto/update-product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
    async createProduct(@Body() createProductDto: CreateProductDto): Promise<Product>{
      return await this.productService.createProduct(createProductDto);
    }

  @Get()
  async findAll(): Promise<Product[]>{
    return this.productService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') productId: string){
    return this.productService.findOne(+productId);
  }

  @Patch(':id')
  async update(@Param('id') productId: string, @Body() updateProductDto: UpdateProductDto){
    return await this.productService.update(+productId, updateProductDto);
  }

  @Delete(':id')
  async delete(@Param('id') productId: string){
    return await this.productService.delete(+productId)
  }

}
