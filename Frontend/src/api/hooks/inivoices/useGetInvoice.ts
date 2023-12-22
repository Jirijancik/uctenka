import { useQuery } from 'react-query';
 
import { invoiceService } from '@/api/service/invoice';

 
export const useGetInvoice = () => {
    const { data, isLoading, error } = useQuery(['clients'], invoiceService.fetchInvoices);

    return { data, isLoading, error };
};
