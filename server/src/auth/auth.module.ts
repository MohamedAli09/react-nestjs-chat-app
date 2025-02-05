import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalStrategy } from './strategies/local.strategy';
import { UsersModule } from 'src/users/users.module';

@Module({
  providers: [AuthService, LocalStrategy],
  imports: [UsersModule],
})
export class AuthModule {}
