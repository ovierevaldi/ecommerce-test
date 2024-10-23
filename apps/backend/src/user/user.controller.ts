import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '@prisma/client'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() CreateUserDto: CreateUserDto): Promise<User>{
    return await this.userService.create(CreateUserDto);
  }

  @Get()
  async findAll(): Promise<User[]>{
    return this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') UserId: string){
    return this.userService.findOne(+UserId);
  }

  @Patch(':id')
  async update(@Param('id') UserId: string, @Body() UpdateUserDto: UpdateUserDto){
    return await this.userService.update(+UserId, UpdateUserDto);
  }

  @Delete(':id')
  async delete(@Param('id') UserId: string){
    return await this.userService.delete(+UserId)
  }
}
