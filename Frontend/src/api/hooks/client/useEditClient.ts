import { useMutation, useQueryClient } from 'react-query';

import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
const putClient = async (clientId: string, data: any) => {
  const response = await axios.put(`${API_URL}/clients/${clientId}`, data);
  return response.data;
};

export const useEditClient = (onSuccess: () => void) => {
  const queryClient = useQueryClient();
  return useMutation((data: any) => putClient(data.id, data), {
    onSuccess: () => {
      queryClient.invalidateQueries(['clients']);
      onSuccess();
    },
  });
};
