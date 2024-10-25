import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SignInDto } from './Dto/sign-in.dto';
import { User } from '@prisma/client';
import { verifyPassword } from 'lib/hashPassword';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private prismaService: PrismaService, private jwtService: JwtService){}

    async signIn(signInData: SignInDto): Promise<{access_token: string}>{
        const userData = await this.prismaService.user.findUnique({where: {username: signInData.username}});

        const passMatch = await verifyPassword(userData.password, signInData.password);
        if(!passMatch)
            throw UnauthorizedException;

        const { password, ...user } = userData;
        const accessToken = await this.jwtService.signAsync(user);

        return {access_token: accessToken} 
    }
}
