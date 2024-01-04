// src/users/users.service.ts
import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  private readonly logger = new Logger(UserService.name);

  async findAll(): Promise<User[]> {
    this.logger.log('Some informative message');
    return this.usersRepository.find();
  }

  async findOne(conditions: Partial<User>): Promise<User | undefined> {
    return this.usersRepository.findOne({ where: conditions });
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    // 10 is the salt rounds
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

    const newUser = this.usersRepository.create({
      ...createUserDto,
      password: hashedPassword,
    });

    return this.usersRepository.save(newUser);
  }
}
