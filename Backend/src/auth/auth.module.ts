import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { LocalStrategy } from './local.strategy';
//import { ConfigModule, ConfigService } from '@nestjs/config'

const JWT_SETTINGS = JwtModule.register({
  secret: process.env.JWT_SECRET, // Provide a secret key here
  signOptions: { expiresIn: '1h' }, // Example expiration time
  global: true,
});
// const JWT_SETTINGS2 = JwtModule.registerAsync({
//   imports: [ConfigModule],
//   inject: [ConfigService],
//   useFactory: async (configService: ConfigService) => ({
//     secret: configService.get<string>('JWT_SECRET'),
//     signOptions: { expiresIn: '60s' },
//   }),
// });

@Module({
  imports: [UserModule, JWT_SETTINGS],
  providers: [AuthService, JwtService, LocalStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
