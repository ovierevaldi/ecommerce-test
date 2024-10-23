import { Body, Controller, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './Dto/CreateProductDto';
import { Product } from '@prisma/client';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
    async createProduct(@Body() createProductDto: CreateProductDto): Promise<Product>{
      return await this.productService.createProduct(createProductDto);
    }
}
