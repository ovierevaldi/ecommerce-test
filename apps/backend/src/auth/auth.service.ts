import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SignInDto } from './Dto/sign-in.dto';
import { User } from '@prisma/client';
import { verifyPassword } from 'lib/hashPassword';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private prismaService: PrismaService, private jwtService: JwtService){}

    async signIn(signInData: SignInDto, userType? : string): Promise<{access_token: string}>{
        
        // Check if the sign in method is for Admin (Code: A)
        let userData = null;
        if(userType === 'A'){
            userData = await this.prismaService.admin.findUnique({where: {username: signInData.username}});
        }
        else{
            userData = await this.prismaService.user.findUnique({where: {username: signInData.username}});
        }

        if(!userData){
            throw UnauthorizedException;
        }

        const passMatch = await verifyPassword(userData.password, signInData.password);
        if(!passMatch)
            throw UnauthorizedException;

        const { password, id, ...user } = userData;
        const updatedUser = {...user, sub: id}
        
        const accessToken = await this.jwtService.signAsync(updatedUser);

        return {access_token: accessToken};
    }
}
