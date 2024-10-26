import { ConflictException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Admin } from '@prisma/client';
import { hashPassword, verifyPassword } from 'lib/hashPassword';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AdminService {
  constructor(private prismaService: PrismaService, private jwtService: JwtService)
  {}

  async create(createAdminDto: CreateAdminDto): Promise<Admin> {

    const User = await this.prismaService.admin.findFirst({where: {username: createAdminDto.username}})

    if(User)
      throw new ConflictException('username already exsist')

    const hashedPassword = await hashPassword(createAdminDto.password);
    if(!hashedPassword)
        throw InternalServerErrorException

    const NewUser = {...createAdminDto, password: hashedPassword}

    return await this.prismaService.admin.create({data: NewUser})
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

  async signIn(data: {username: string, password: string}){
    const userData = await this.prismaService.admin.findUnique({where: {username: data.username}})
    
    if(!userData)
      throw new UnauthorizedException('User not found.');

    const isPasswordMatch = await verifyPassword(userData.password, data.password)
    if(!isPasswordMatch)
        throw new UnauthorizedException('Invalid Credentials');

    const {password, id, ...user} = userData;
    const accessToken = await this.jwtService.signAsync({...user, sub: id});
    const payload = {...user, sub: id, accessToken: accessToken}

    return payload;
  }
}
