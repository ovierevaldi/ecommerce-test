import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Product, ProductCategory } from '@prisma/client';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  async create(@Body() createCategoryDto: CreateCategoryDto): Promise<ProductCategory> {
    return this.categoryService.create(createCategoryDto);
  }

  @Get()
  async findAll(): Promise<ProductCategory[]> {
    return this.categoryService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') productId: string): Promise<ProductCategory>  {
    return this.categoryService.findOne(+productId);
  }

  @Patch(':id')
  async update(@Param('id') productId: string, @Body() updateCategoryDto: UpdateCategoryDto): Promise<ProductCategory> {
    return this.categoryService.update(+productId, updateCategoryDto);
  }

  @Delete(':id')
  async remove(@Param('id') productId: string): Promise<ProductCategory> {
    return this.categoryService.delete(+productId);
  }
}
