import { ConflictException, Injectable, InternalServerErrorException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';
import { hashPassword } from 'lib/hashPassword';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService, private jwtService: JwtService){
  }

  async create(createUserDto:  CreateUserDto): Promise<User>{
    const User = await this.prismaService.admin.findUnique({where: {username: createUserDto.username}})

    if(User)
      throw new ConflictException('username already exsist')

    const hashedPassword = await hashPassword(createUserDto.password);
    if(!hashedPassword)
        throw InternalServerErrorException

    const NewUser = {...createUserDto, password: hashedPassword}
    return await this.prismaService.user.create({data: NewUser})
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
