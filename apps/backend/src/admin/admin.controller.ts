import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from '@prisma/client';

@Controller('admin')
export class AdminController {
  constructor(private readonly categoryService: AdminService) {}

  @Post()
  async create(@Body() createCategoryDto: CreateAdminDto): Promise<Admin> {
    return this.categoryService.create(createCategoryDto);
  }

  @Get()
  async findAll(): Promise<Admin[]> {
    return this.categoryService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') productId: string): Promise<Admin>  {
    return this.categoryService.findOne(+productId);
  }

  @Patch(':id')
  async update(@Param('id') productId: string, @Body() updateCategoryDto: UpdateAdminDto): Promise<Admin> {
    return this.categoryService.update(+productId, updateCategoryDto);
  }

  @Delete(':id')
  async remove(@Param('id') productId: string): Promise<Admin> {
    return this.categoryService.delete(+productId);
  }
}
