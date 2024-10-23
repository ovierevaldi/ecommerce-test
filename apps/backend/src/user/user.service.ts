import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService){
  }

  async create(CreateUserDto:  CreateUserDto): Promise<User>{
      return await this.prismaService.user.create({data: CreateUserDto})
  }

  async findAll(): Promise<User[]>{
      return await this.prismaService.user.findMany();
  }

  async findOne(UserId: number): Promise<User>{
      return await this.prismaService.user.findUnique({where: {id: UserId}});
  }

  async update(UserId: number, updateUserDto: UpdateUserDto): Promise<User>{
      return await this.prismaService.user.update({where: {id: UserId}, data: updateUserDto});
  }

  async delete(UserId: number): Promise<User>{
      return await this.prismaService.user.delete({where: {id: UserId}});
  }
}
