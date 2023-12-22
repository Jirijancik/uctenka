export class UserDto {
  id: number;
  username: string;
  // Add other user properties, but exclude the password
}

export class CreateUserDto {
  username: string;
  password: string;
  // Add other user properties, but exclude the password
}
