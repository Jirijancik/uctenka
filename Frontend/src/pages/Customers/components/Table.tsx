import { FC, useMemo } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { useNavigate, useNavigation } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { App, Dropdown, Table } from 'antd';
import { DropdownButtonProps } from 'antd/es/dropdown';
import { MenuItemType } from 'antd/es/menu/hooks/useItems';
import { ColumnsType } from 'antd/es/table';
import { Dayjs, isDayjs } from 'dayjs';

import { useDeleteClient } from '@/api/hooks/client/deleteClient';
import { useEditClient } from '@/api/hooks/client/useEditClient';
import { Client } from '@/api/service/client';
import { currentClientState } from '@/store/currentClient';

import { selectedClientIdState } from '../store/selectedClientIdState';

interface ActionButtonOptions {
  onClick: (selectedClient: Client) => void;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const getTableColumns = ({
  onClick,
  onDelete,
  onEdit,
}: ActionButtonOptions): ColumnsType<Client> => [
  {
    title: 'Identification Number',
    dataIndex: 'identificationNumber',
    key: 'identificationNumber',
  },
  { title: 'Business Name', dataIndex: 'businessName', key: 'businessName' },
  { title: 'Legal Form', dataIndex: 'legalForm', key: 'legalForm' },
  {
    title: 'Establishment Date',
    dataIndex: 'establishmentDate',
    key: 'establishmentDate',
    render: (text: Dayjs | string) => (isDayjs(text) ? text?.format('YYYY-MM-DD') : text),
  },
  {
    title: 'Tax Identification Number',
    dataIndex: 'taxIdentificationNumber',
    key: 'taxIdentificationNumber',
  },
  { title: 'Country Code', dataIndex: 'countryCode', key: 'countryCode' },
  { title: 'Country Name', dataIndex: 'countryName', key: 'countryName' },
  { title: 'Municipality Name', dataIndex: 'municipalityName', key: 'municipalityName' },
  { title: 'Street Name', dataIndex: 'streetName', key: 'streetName' },
  { title: 'House Number', dataIndex: 'houseNumber', key: 'houseNumber' },
  { title: 'Postal Code', dataIndex: 'postalCode', key: 'postalCode' },
  { title: 'Full Address', dataIndex: 'fullAddress', key: 'fullAddress' },
  {
    title: 'Action',
    dataIndex: 'operation',
    key: 'operation',
    fixed: 'right',
    render: (_, record) => (
      <Dropdown.Button
        menu={{
          items: [
            { key: '1', label: 'Edit', onClick: () => onEdit?.(record.id) },
            { key: '2', danger: true, label: 'Delete', onClick: () => onDelete?.(record.id) },
          ],
        }}
        onClick={() => onClick(record)}
        type="primary"
      >
        Login
      </Dropdown.Button>
    ),
  },
];

interface CustomersTableProps {
  data: Array<any>;
  isLoading: boolean;
  openDrawer: () => void;
}

export const CustomersTable: FC<CustomersTableProps> = (props) => {
  const { data, isLoading, openDrawer } = props;
  const queryClient = useQueryClient();
  const { notification } = App.useApp();

  const setSelectedClientId = useSetRecoilState(selectedClientIdState);
  const setCurrentClient = useSetRecoilState(currentClientState);
  const navigate = useNavigate();

  const { mutateAsync: deleteClient, isLoading: isDeleting } = useDeleteClient();

  const handleDeleteClient = (id: number) => {
    deleteClient(id);
    queryClient.invalidateQueries({ queryKey: ['clients'] });
  };

  const handleEditClient = (id: number) => {
    setSelectedClientId(id);
    openDrawer();
  };

  const handleLoginToClient = (selectedClient: Client) => {
    // set selected client id to session storage
    sessionStorage.setItem('current_client_id', selectedClient.id.toString());

    setCurrentClient(selectedClient);

    // redirect to dashboard page
    navigate('/');
    notification.success({ message: 'Logged into a Customer' });

  };

  const columns = useMemo(() => {
    return getTableColumns({
      onClick: handleLoginToClient,
      onDelete: handleDeleteClient,
      onEdit: handleEditClient,
    });
  }, []);

  return (
    <>
      <Table
        loading={isLoading || isDeleting}
        dataSource={data}
        columns={columns}
        rowKey="identificationNumber"
      />
      ;
    </>
  );
};
