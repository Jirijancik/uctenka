import { useMutation } from '@tanstack/react-query';
import { ClientFormValues } from '@/pages/Customers/types';
import { clientService } from '@/api/service/client';


export const useGetARESClient = (onSuccess: (data: ClientFormValues) => void) => {
  const { mutateAsync, isLoading, error, data } = useMutation(
    (identificationNumber: string) => clientService.fetchARESData(identificationNumber),
    {
      onSuccess: onSuccess,
    }
  );

  return { isLoading, error, mutateAsync, data };
};