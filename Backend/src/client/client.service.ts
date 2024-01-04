import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from './client.entity';
import { parseToClientFormValues } from './utils/parseToClientFormValues';
import { ClientFormValues, IARESClientResponse } from './types';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private clientsRepository: Repository<Client>,
  ) {}

  async create(clientData: Client): Promise<Client> {
    const newClient = this.clientsRepository.create(clientData);
    return this.clientsRepository.save(newClient);
  }

  async findAll(fields?: string[]): Promise<Client[]> {
    if (!fields || fields.length === 0) {
      return this.clientsRepository.find();
    }

    // Ensure that only valid fields are selected
    // const validFields = ['id', 'name']; // Add other valid field names as necessary

    const metadata = this.clientsRepository.metadata;
    const validFields = metadata.columns.map((column) => column.propertyName);

    const fieldsToSelect = fields.filter((field) =>
      validFields.includes(field),
    );

    // Query the database for clients with only the selected fields
    return this.clientsRepository
      .createQueryBuilder('client')
      .select(fieldsToSelect.map((field) => `client.${field}`))
      .getMany();
  }

  async findOne(id: number): Promise<Client | undefined> {
    return this.clientsRepository.findOneBy({ id });
  }

  async update(
    id: number,
    updateData: Partial<Client>,
  ): Promise<Client | null> {
    await this.clientsRepository.update(id, updateData);
    return this.clientsRepository.findOneBy({ id });
  }

  async delete(id: number): Promise<void> {
    await this.clientsRepository.delete(id);
  }

  async fetchARESData(identificationNumber: string): Promise<ClientFormValues> {
    const ARES_URL =
      'https://ares.gov.cz/ekonomicke-subjekty-v-be/rest/ekonomicke-subjekty-res/' +
      identificationNumber;
    try {
      const response = await fetch(ARES_URL);
      const result = (await response.json()) as IARESClientResponse | null;

      if (result === null) {
        return null;
      }

      return parseToClientFormValues(result);
    } catch (error) {
      throw error;
    }
  }
}
