import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ClientService } from './client.service';
import { Client } from './client.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('clients')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Req() req: any, @Body() clientData: Client) {
    const currentUser = req?.user;

    return this.clientService.create(clientData, currentUser);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async find(
    @Req() req: any,
    @Query('fields') fields: string,
  ): Promise<Client[]> {
    const userId = req?.user?.id;

    const selectedFields = fields ? fields.split(',') : null;
    return this.clientService.findAll(userId, selectedFields);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.clientService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateData: Client) {
    return this.clientService.update(id, updateData);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.clientService.delete(id);
  }

  @Get('ares/:identificationNumber')
  fetchARESData(@Param('identificationNumber') identificationNumber: string) {
    return this.clientService.fetchARESData(identificationNumber);
  }
}
