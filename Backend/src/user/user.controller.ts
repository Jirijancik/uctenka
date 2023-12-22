import { Controller, Get, Param } from '@nestjs/common'; 
import { UserService } from './user.service';


@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getAll() {

    return this.userService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.userService.findOne({ id: parseInt(id) });
  }

  // Add other endpoints as needed
}
