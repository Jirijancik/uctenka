import { useMutation } from 'react-query';

import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
const deleteClient = async (id: number) => {
  const response = await axios.delete(`${API_URL}/clients/${id}`);
  return response.data;
};

export const useDeleteClient = () => {
  const { mutateAsync, isLoading } = useMutation((id: number) => deleteClient(id));

  return { mutateAsync, isLoading };
};
