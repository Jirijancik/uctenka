import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from './client.entity';
import { parseToClientFormValues } from './utils/parseToClientFormValues';
import { ClientFormValues, IARESClientResponse } from './types';
import { User } from 'src/user/user.entity';
import { validate } from 'class-validator';
import { ValidationException } from 'src/exceptions/validation';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private clientsRepository: Repository<Client>,
  ) {}

  async create(clientData: Client, currentUser: User): Promise<Client> {
    const newClient = this.clientsRepository.create(clientData);

    // If users is not already initialized in the clientData, initialize it here
    if (!newClient.users) {
      newClient.users = [];
    }

    // Add the current user to the new client's users collection
    newClient.users.push(currentUser);

    const errors = await validate(newClient);

    if (errors.length > 0) {
      // Throw a custom exception that can be handled by NestJS's exception filters
      throw new ValidationException(errors);
    }

    return this.clientsRepository.save(newClient);
  }

  async findAll(userId: User['id'], fields?: string[]): Promise<Client[]> {
    console.log("🚀 ~ ClientService ~ findAll ~ userId:", userId)
    if (!fields || fields.length === 0) {
      return this.clientsRepository.find();
    }

    const metadata = this.clientsRepository.metadata;
    const validFields = metadata.columns.map((column) => column.propertyName);

    const fieldsToSelect = fields.filter((field) =>
      validFields.includes(field),
    );

    // SELECT * FROM client
    // INNER JOIN client_users_users ON client.id = client_users_users."clientId"
    // WHERE client_users_users."usersId" = 17
    // TODO: FIX THIS GODDAMN QUERY
    // Query the database for clients with only the selected fields
    return this.clientsRepository
      .createQueryBuilder('client')
      .innerJoin('client.clientUsersUsers', 'client_users_users')
      .where('client_users_users.usersId = :userId', { userId })
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
