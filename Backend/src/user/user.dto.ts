import { UserRole } from "./user.entity";

export class UserDto {
  id: number;
  username: string;
  email: string;
  role: UserRole;
}

export class CreateUserDto {
  username: string;
  password: string;
  email: string;
  role: UserRole;
}
