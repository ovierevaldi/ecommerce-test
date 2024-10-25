import {Body, Controller, Post, Request, UseGuards,} from '@nestjs/common';
import { LocalAuthGuard } from './auth.guard';
import { UserDataPayload } from 'src/types/types';


@Controller('auth')
export class AuthController {
  constructor() {}
  
  @UseGuards(LocalAuthGuard)
  @Post('')
  signIn(@Request() req: any){
    return req.user;
  }
}
