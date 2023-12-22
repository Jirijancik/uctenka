import { Create } from '@mui/icons-material';

import HttpService from './httpService';
import { AxiosRequestConfig } from 'axios';

export interface Invoice {
  id: number;
  invoiceNumber: string;
  dateIssued: Date;
  dueDate: Date;
  totalAmount: number;
  taxAmount: number;
  ownerId: number;
  supplierId: number;
  customerId: number;
}

export type CreateInvoiceDTO = Omit<Invoice, 'id'>;

class InvoiceService extends HttpService {
  constructor() {
    super('/invoices');
  }

  fetchInvoices = (config?: AxiosRequestConfig<Invoice[]> | undefined): Promise<Invoice[]> => {
    return this.get<Invoice[]>('', config);
  };

  createInvoice = (invoiceData: CreateInvoiceDTO): Promise<Invoice> => {
    return this.post<Invoice>('', invoiceData);
  };

  updateInvoice = (id: number, invoiceData: Partial<Invoice>): Promise<Invoice> => {
    return this.put<Invoice>(id.toString(), invoiceData);
  };

  deleteInvoice = (id: number): Promise<void> => {
    return this.delete<void>(id.toString());
  };
}

export const invoiceService = new InvoiceService();
