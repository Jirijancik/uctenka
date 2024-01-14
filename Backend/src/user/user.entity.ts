// src/users/entities/user.entity.ts
import { IsEmail } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum UserRole {
  Admin = 'admin',
  Magic = 'magic',
  User = 'user',
  // Not used in this project for now
  Guest = 'guest',
}

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 }) // Adjusted length to match SQL script
  username: string;

  @Column({ length: 255 }) // Explicit length for consistency
  password: string;

  //email
  @Column({ length: 255, unique: true })
  @IsEmail()
  email: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.User
  })
  role: UserRole;
  // Add other fields here as needed
}
