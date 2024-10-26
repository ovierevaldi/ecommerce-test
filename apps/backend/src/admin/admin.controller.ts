import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from '@prisma/client';
import { AdminLocalGuard } from './admin.guard';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post()
  async create(@Body() createCategoryDto: CreateAdminDto): Promise<Admin> {
    return this.adminService.create(createCategoryDto);
  }

  @Get()
  async findAll(): Promise<Admin[]> {
    return this.adminService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') productId: string): Promise<Admin>  {
    return this.adminService.findOne(+productId);
  }

  @Patch(':id')
  async update(@Param('id') productId: string, @Body() updateCategoryDto: UpdateAdminDto): Promise<Admin> {
    return this.adminService.update(+productId, updateCategoryDto);
  }

  @Delete(':id')
  async remove(@Param('id') productId: string): Promise<Admin> {
    return this.adminService.delete(+productId);
  }

  @UseGuards(AdminLocalGuard)
  @Post('/auth/')
  auth(@Request() req){
    return req.user;
  }
}
