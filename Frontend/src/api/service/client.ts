import { ClientFormValues } from '@/pages/Customers/types';

import HttpService from './httpService';
import { AxiosRequestConfig } from 'axios';

export interface Client {
  id: number;
  identificationNumber: string;
  businessName: string;
  legalForm: string;
  establishmentDate: string;
  taxIdentificationNumber: string | null;
  countryCode: string;
  countryName: string;
  municipalityName: string;
  streetName: string;
  houseNumber: number;
  postalCode: number;
  fullAddress: string;
}

class ClientService extends HttpService {
  constructor() {
    super('/clients');
  }

  fetchClients = (config?: AxiosRequestConfig<Client[]> | undefined): Promise<Client[]> => {
    return this.get<Client[]>('', config);
  };

  createClient = (clientData: Client): Promise<Client> => {
    return this.post<Client>('', clientData);
  };

  updateClient = (id: number, clientData: Partial<Client>): Promise<Client> => {
    return this.put<Client>(id.toString(), clientData);
  };

  deleteClient = (id: number): Promise<void> => {
    return this.delete<void>(id.toString());
  };

  fetchARESData = (identificationNumber: string): Promise<ClientFormValues> => {
    return this.get<ClientFormValues>(`ares/${identificationNumber}`);
  };
}

export const clientService = new ClientService();
