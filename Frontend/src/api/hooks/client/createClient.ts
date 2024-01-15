import { useMutation } from '@tanstack/react-query';

import axios from 'axios';

import type { ClientFormValues } from '@/pages/Customers/types';
import { clientService } from '@/api/service/client';

export const useCreateClient = (onSuccess: (data: ClientFormValues) => void) => {
  const { data, mutateAsync, isLoading, error } = useMutation(clientService.createClient, {
    onSuccess: onSuccess,
  });

  return { isLoading, error, mutateAsync, data };
};
