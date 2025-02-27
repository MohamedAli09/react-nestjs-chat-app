import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Response } from 'express';
import { User } from 'src/users/entities/user.entity';
import { TokenPayload } from './token-payload.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {}
  async login(user: User, response: Response) {
    const expiers = new Date();
    expiers.setSeconds(
      expiers.getSeconds() + this.configService.getOrThrow('JWT_EXPIRES_IN'),
    );
    const tokenPayload: TokenPayload = {
      _id: user._id.toHexString(),
      email: user.email,
    };
    const token = this.jwtService.sign(tokenPayload);
    response.cookie('Authentication', token, {
      httpOnly: true,
      expires: expiers,
    });
  }
  logout(response: Response) {
    response.cookie('Authentication', '', {
      httpOnly: true,
      expires: new Date(),
    });
  }
}
