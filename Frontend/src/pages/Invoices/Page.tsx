import { useState } from 'react';

import { Button, Card } from 'antd';

import { ClientsViewMode, useGetClients } from '@/api/hooks/client/getClients';
import { useGetInvoice } from '@/api/hooks/inivoices/useGetInvoice';
import Meta from '@/components/Meta';

import { CreateDrawer } from './components/Drawer';
import { InvoicesTable } from './components/Table';

export const InvoicesPage = () => {
  const [open, setOpen] = useState(false);

  const { data: clientsData, isLoading: isLoadingClients } = useGetClients(ClientsViewMode.Dropdown);
  const { data: invoicesData, isLoading } = useGetInvoice();
  const handleShowDrawer = () => {
    setOpen(true);
  };

  const handleOnDrowerVisible = (newState: boolean) => {
    setOpen(newState);
  };

  return (
    <>
      <Meta title="Invoices" />
      <CreateDrawer clients={clientsData} open={open} setIsVisible={handleOnDrowerVisible}></CreateDrawer>
      <Card
        title="Invoices"
        extra={
          <Button onClick={handleShowDrawer} loading={isLoading} icon="+" type="primary">
            New Invoice
          </Button>
        }
      >
        <InvoicesTable
          openDrawer={handleShowDrawer}
          isLoading={isLoading}
          data={invoicesData ?? []}
        />
        ;
      </Card>
    </>
  );
};
