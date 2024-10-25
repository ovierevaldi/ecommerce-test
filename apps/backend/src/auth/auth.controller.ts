import { Body, Controller, Post, Query } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './Dto/sign-in.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  signIn(@Body() signInDto: SignInDto, @Query('user-type') userType: string): Promise<{access_token: string}>{
    return this.authService.signIn(signInDto, userType)
  }
}
