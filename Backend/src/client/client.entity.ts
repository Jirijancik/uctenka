// client.entity.ts
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { ClientEntity } from './client.dto';
import { User } from 'src/user/user.entity';

@Entity()
export class Client implements ClientEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique: true})
  identificationNumber: string;

  @Column()
  businessName: string;

  @Column()
  legalForm: string;

  @Column()
  establishmentDate: string; // Consider using Date type

  @Column({ type: 'varchar', nullable: true, unique: true })
  taxIdentificationNumber: string | null;

  @Column()
  countryCode: string;

  @Column()
  countryName: string;

  @Column()
  municipalityName: string;

  @Column()
  streetName: string;

  @Column()
  houseNumber: number;

  @Column()
  postalCode: number;

  @Column()
  fullAddress: string;

  // Many-to-Many relation with User
  @ManyToMany(() => User)
  @JoinTable()
  users: User[];
}
