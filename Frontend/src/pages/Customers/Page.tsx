import { useState } from 'react';

import { Button, Card } from 'antd';

import { useGetClients } from '@/api/hooks/client/getClients';
import Meta from '@/components/Meta';

import { CustomersTable } from './components/Table';
import { CreateDrawer } from './components/Drawer';

export function CustomersPage() {
  const [open, setOpen] = useState(false);

  const { data: clientsData, isLoading } = useGetClients();

  const handleShowDrawer = () => {
    setOpen(true);
  };

  const handleOnDrowerVisible = (newState: boolean) => {
    setOpen(newState);
  };

  return (
    <>
      <Meta title="Customers" />
      <CreateDrawer open={open} setIsVisible={handleOnDrowerVisible}></CreateDrawer>
      <Card
        title="Overview"
        extra={
          <Button onClick={handleShowDrawer} loading={isLoading} icon="+" type="primary">
            New Customer
          </Button>
        }
      >
        <CustomersTable openDrawer={handleShowDrawer} isLoading={isLoading} data={clientsData ?? []} />;
      </Card>
    </>
  );
}
