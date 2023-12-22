import { useMutation } from 'react-query';

import { CreateInvoiceDTO, invoiceService } from '@/api/service/invoice';

export const useCreateInvoice = () => {
  return useMutation((newInvoiceData: CreateInvoiceDTO) =>
    invoiceService.createInvoice(newInvoiceData),
  );
};
