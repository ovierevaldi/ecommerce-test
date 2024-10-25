import {Body, Controller, Post, Request, UseGuards,} from '@nestjs/common';
import { LocalAuthGuard } from './auth.guard';


@Controller('auth')
export class AuthController {
  constructor() {}
  
  @UseGuards(LocalAuthGuard)
  @Post('signin')
  signIn(@Request() req){
    return req.user;
  }
}
