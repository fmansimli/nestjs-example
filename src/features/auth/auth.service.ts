import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Password } from 'src/utils/password';

@Injectable()
export class AuthService {
  constructor(private readonly configService: ConfigService) {}

  async signIn(email: string, password: string) {
    const jwt = this.configService.get<string>('JWT_SECRET');

    const hashed = await Password.toHash(password);

    return { email, password: hashed, jwt, type: 'login' };
  }

  async signUp(email: string, password: string) {
    const jwt = this.configService.get<string>('JWT_SECRET');

    const hashed = await Password.toHash(password);

    return { email, password: hashed, jwt, type: 'register' };
  }

  async test(data?: any) {
    return Promise.resolve(data || { test: 'test' });
  }
}
