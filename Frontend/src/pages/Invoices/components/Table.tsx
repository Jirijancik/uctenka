import { FC, useMemo } from 'react';
import { useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { Dropdown, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import axios from 'axios';

import { useDeleteClient } from '@/api/hooks/client/deleteClient';
import { Invoice } from '@/api/service/invoice';

const downloadInvoicePdf = async (invoiceId: number | string) => {
  const response = await axios.get(`http://localhost:3000/invoices/${invoiceId}/pdf`, {
    responseType: 'blob',
  });
  const url = window.URL.createObjectURL(new Blob([response.data]));
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `invoice-${invoiceId}.pdf`);
  document.body.appendChild(link);
  link.click();
};

interface ActionButtonOptions {
  onClick: (id: number) => void;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const getTableColumns = ({
  onClick,
  onDelete,
  onEdit,
}: ActionButtonOptions): ColumnsType<Invoice> => [
  {
    title: 'Invoice Number',
    dataIndex: 'invoiceNumber',
    key: 'invoiceNumber',
  },
  {
    title: 'Date Issued',
    dataIndex: 'dateIssued',
    key: 'dateIssued',
    render: (text) => text?.toString(),
  },
  {
    title: 'Due Date',
    dataIndex: 'dueDate',
    key: 'dueDate',
    render: (text) => text?.toString(),
  },
  {
    title: 'Total Amount',
    dataIndex: 'totalAmount',
    key: 'totalAmount',
  },
  {
    title: 'Tax Amount',
    dataIndex: 'taxAmount',
    key: 'taxAmount',
  },
  {
    title: 'Owner ID',
    dataIndex: 'ownerId',
    key: 'ownerId',
  },
  {
    title: 'Supplier ID',
    dataIndex: 'supplierId',
    key: 'supplierId',
  },
  {
    title: 'Customer ID',
    dataIndex: 'customerId',
    key: 'customerId',
  },
  {
    title: 'Action',
    dataIndex: 'operation',
    key: 'operation',
    fixed: 'right',
    render: (_, record) => (
      <Dropdown.Button
        menu={{
          items: [
            { key: '1', label: 'Export Pdf', onClick: () => downloadInvoicePdf?.(record.id) },
            { key: '2', danger: true, label: 'Delete', onClick: () => onDelete?.(record.id) },
          ],
        }}
        onClick={() => onClick(record.id)}
        type="primary"
      >
        Edit
      </Dropdown.Button>
    ),
  },
];

interface InvoicesTableTableProps {
  data: Invoice[];
  isLoading: boolean;
  openDrawer: () => void;
}

export const InvoicesTable: FC<InvoicesTableTableProps> = (props) => {
  const { data, isLoading, openDrawer } = props;
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const { mutateAsync: deleteClient, isLoading: isDeleting } = useDeleteClient();

  const handleDeleteClient = (id: number) => {
    deleteClient(id);
    queryClient.invalidateQueries({ queryKey: ['clients'] });
  };

  const handleEditClient = (id: number) => {
    openDrawer();
  };

  const handleLoginToClient = (id: number) => {
    // set selected client id to session storage
    sessionStorage.setItem('current_client_id', id.toString());

    // redirect to dashboard page
    navigate('/');
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
