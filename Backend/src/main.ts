import * as dotenv from 'dotenv';
dotenv.config();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// const corsOptions: CorsOptions = {
//   allowedHeaders: ['content-type'],
//   origin: 'http://localhost:3000',
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   preflightContinue: false,
//   optionsSuccessStatus: 204,
//   credentials: true,
// };

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.enableCors();

  await app.listen(5000);
}
bootstrap();
