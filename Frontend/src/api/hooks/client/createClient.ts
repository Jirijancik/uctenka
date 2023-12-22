import { useMutation } from 'react-query';

import axios from 'axios';

import type { ClientFormValues } from '@/pages/Customers/types';

const API_URL = import.meta.env.VITE_API_URL;
export const createClient = async (clientData: ClientFormValues) => {
  const response = await axios.post(`${API_URL}/clients`, clientData);
  return response.data;
};

export const useCreateClient = (onSuccess: (data: ClientFormValues) => void) => {
  const { data, mutateAsync, isLoading, error } = useMutation(createClient, {
    onSuccess: onSuccess,
  });

  return { isLoading, error, mutateAsync, data };
};
