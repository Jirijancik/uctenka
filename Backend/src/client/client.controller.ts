import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import { ClientService } from './client.service';
import { Client } from './client.entity';

@Controller('clients')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post()
  create(@Body() clientData: Client) {
    return this.clientService.create(clientData);
  }

  @Get()
  async find(@Query('fields') fields: string): Promise<Client[]> {
    const selectedFields = fields ? fields.split(',') : null;
    return this.clientService.findAll(selectedFields);
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
