// src/users/entities/user.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 }) // Adjusted length to match SQL script
  username: string;

  @Column({ length: 255 }) // Explicit length for consistency
  password: string;

  // Add other fields here as needed
}