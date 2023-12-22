import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Card, Space, Typography } from 'antd';

export const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <Card title="Basic Actions">
        <Space direction="vertical">
          <Typography.Paragraph>Create new customer</Typography.Paragraph>

          <Button icon="+" onClick={() => navigate('/customers')} type="primary">
            Create customer
          </Button>
        </Space>
      </Card>
    </>
  );
};
