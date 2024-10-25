import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './Dto/sign-in.dto';
import { User } from '@prisma/client';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  signIn(@Body() signInDto: SignInDto): Promise<{access_token: string}>{
    return this.authService.signIn(signInDto)
  }
}
