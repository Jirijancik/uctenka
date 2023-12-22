import { useQuery } from 'react-query';

import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const fetchClientById = async (id: string | undefined) => {
  const response = await axios.get(`${API_URL}/clients/${id}`);
  return response.data;
};

export const useGetClient = (id: string | undefined | null) => {
  const { data, isLoading, error } = useQuery(['clients', id], () => fetchClientById(id), {
    enabled: !!id,
  });

  return { data, isLoading, error };
};
