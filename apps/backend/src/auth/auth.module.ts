import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local-strategy';
import { AuthService } from './auth.service';

@Module({
  imports: [
    JwtModule.register({
      global: true, 
      secret: process.env.JWT_KEY, 
      signOptions: {expiresIn: process.env.TOKEN_DURATION}
    }),
    PassportModule
  ],
  controllers: [AuthController],
  providers: [PrismaService, LocalStrategy, AuthService],
})
export class AuthModule {}
