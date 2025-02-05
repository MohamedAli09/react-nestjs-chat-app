import { Controller, Post, Res, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { CurrentUser } from './current-user.decorator';
import { User } from 'src/users/entities/user.entity';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  @Post('login')
  @UseGuards(LocalAuthGuard)
  async login() {
    // This method is called when the user is successfully authenticated
    return { message: 'Login successful' };
  }
}
