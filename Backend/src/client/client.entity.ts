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
import { IsNotEmptyRelation } from 'src/validators/IsNotEmptyRelation';

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
  // Users can have assigned multiple clients
  @ManyToMany(() => User)
  @JoinTable({
    name: 'client_users_users', // Join table name
    joinColumn: { name: 'clientId', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'usersId', referencedColumnName: 'id' } // Note the column name
  })
  @IsNotEmptyRelation({ message: 'A client must be associated with at least one user.' })
  users: User[];
}
