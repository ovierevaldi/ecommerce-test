import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { verifyPassword } from 'lib/hashPassword';
import { JwtService } from '@nestjs/jwt';
import { UserPayload } from 'src/types/types';

@Injectable()
export class AuthService {
    constructor(private prismaService: PrismaService, private jwtService: JwtService){}

    async validate(username: string, pass: string): Promise<any>{
        const userData = await this.prismaService.user.findUnique({where: {username: username}});
    
        if(!userData){
            throw new NotFoundException(`User with username: ${username} not found.`) ;
        }
    
        const isPassMatched = await verifyPassword(userData.password, pass);
        if(!isPassMatched)
            throw new UnauthorizedException('Invalid Credentials');
    
        const {password, id, ...user} = userData;
        const accessToken = await this.jwtService.signAsync({...user, sub: id});
    
        const payload = {...user, access_token: accessToken};
        
        return payload;
    }
}
