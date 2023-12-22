import { Client } from 'src/client/client.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Invoice {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  invoiceNumber: string;

  @Column()
  dateIssued: Date;

  @Column()
  dueDate: Date;

  @Column('decimal')
  totalAmount: number;

  @Column('decimal')
  taxAmount: number;

  // Many-to-One Recipient Odběratel
  @ManyToOne(() => Client, (client) => client.id)
  customer : Client;

  // Many-to-One  Dodavatel
  @ManyToOne(() => Client, (client) => client.id)
  supplier : Client;

  // Many-to-One relation to Client
  @ManyToOne(() => Client, (client) => client.id)
  owner: Client;
}
