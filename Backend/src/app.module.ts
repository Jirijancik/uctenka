import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';
import { AuthModule } from './auth/auth.module';
import { ClientModule } from './client/client.module';
import { Client } from './client/client.entity';
import { InvoiceModule } from './invoice/client.module';
import { Invoice } from './invoice/invoice.entity';

const TYPE_ORM_MODULE = TypeOrmModule.forRoot({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [User, Client, Invoice],
  synchronize: true, // set to false in production
});

@Module({
  imports: [
    TYPE_ORM_MODULE,
    UserModule,
    AuthModule,
    ClientModule,
    InvoiceModule,
  ],
  // ... other module contents like providers, controllers, etc.
})
export class AppModule {}
