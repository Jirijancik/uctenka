import { Client } from 'src/client/client.entity';

export class CreateInvoiceDTO {
  invoiceNumber: string;
  dateIssued: Date;
  dueDate: Date;
  totalAmount: number;
  taxAmount: number;
  ownerId: number; 
  supplierId: number;
  customerId: number;
}

export class UpdateInvoiceDTO {
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

export class PatchInvoiceDTO {
  id?: number;
  invoiceNumber?: string;
  dateIssued?: Date;
  dueDate?: Date;
  totalAmount?: number;
  taxAmount?: number;
  ownerId: number; 
  supplierId: number;
  customerId: number;
}

export class GetInvoiceDTO {
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
