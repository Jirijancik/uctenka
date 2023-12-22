import { useMemo } from 'react';
import { useQuery } from 'react-query';

import { clientService } from '@/api/service/client';

export enum ClientsViewMode {
  All = 'all',
  Dropdown = 'dropdown',
}

const getParamsByMode = (mode?: ClientsViewMode) => {
  switch (mode) {
    case ClientsViewMode.Dropdown:
      return { params: { fields: ['id', 'businessName'].join(',') } };
    case ClientsViewMode.All:
    default:
      return {};
  }
};

export const useGetClients = (mode?: ClientsViewMode) => {
  const params = useMemo(() => getParamsByMode(mode), [mode]);

  const { data, isLoading, error } = useQuery(['clients', mode], () =>
    clientService.fetchClients(params),
  );

  return { data, isLoading, error };
};
