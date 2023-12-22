// auth.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service'; // Import UserService
import { CreateUserDto, UserDto } from 'src/user/user.dto';
import * as bcrypt from 'bcrypt';
import { User } from 'src/user/user.entity';


@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<UserDto> {
    const user = await this.userService.findOne({ username });
    if (user && await bcrypt.compare(pass, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: User) {
    const payload = { username: user.username, id: user.id };
    return {
      // NOTE: Temporary fix for AUTH secret key
      access_token: this.jwtService.sign(payload, {
        secret: process.env.JWT_SECRET,
      }),
    };
  }

  async register(createUserDto: CreateUserDto) {
    // Registration logic
  }
}
