import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { AuthService } from './auth.service';

import { LoginDto, RegisterDto } from './dtos';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  signIn(@Body() body: LoginDto) {
    return this.authService.signIn(body.email, body.password);
  }

  @Post('signup')
  signUp(@Body() body: RegisterDto) {
    return this.authService.signUp(body.email, body.password);
  }
}
