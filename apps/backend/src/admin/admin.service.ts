import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Admin } from '@prisma/client';

@Injectable()
export class AdminService {
  constructor(private prismaService: PrismaService)
  {}

  async create(createAdminDto: CreateAdminDto): Promise<Admin> {
    return await this.prismaService.admin.create({data: createAdminDto})
  }

  async findAll(): Promise<Admin[]> {
    return await this.prismaService.admin.findMany();
  }

  async findOne(productID: number): Promise<Admin> {
    return await this.prismaService.admin.findUnique({where: {id: productID}})
  }

  async update(productId: number, updateCategoryDto: UpdateAdminDto): Promise<Admin> {
    return await this.prismaService.admin.update({where: {id: productId}, data: updateCategoryDto});
  }

  async delete(productId: number): Promise<Admin> {
    return await this.prismaService.admin.delete({where: {id: productId}})
  }
}
