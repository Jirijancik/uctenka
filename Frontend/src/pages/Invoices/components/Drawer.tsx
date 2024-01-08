import React, { useState } from 'react';

import { DatePicker, Form, Input, InputNumber, Select } from 'antd';
import { Button, Drawer } from 'antd';

import { useCreateInvoice } from '@/api/hooks/inivoices/useCreateInvoice';
import { Client } from '@/api/service/client';

export interface CreateDrawerProps {
  open: boolean;
  setIsVisible: (newState: boolean) => void;
  clients: Client[] | undefined;
}

export const CreateDrawer: React.FC<CreateDrawerProps> = (props) => {
  const { setIsVisible, open, clients } = props;

  // use createInvoice hook
  const { mutateAsync: createInvoice, isLoading: isCreating } = useCreateInvoice();

  const onFinish = (values) => {
    createInvoice(values);
  };

  const clientsOptions = React.useMemo(() => {
    return clients?.map((client) => {
      return {
        label: client.businessName,
        value: client.id,
      };
    });
  }, [clients]);

  return (
    <>
      <Drawer
        title="Basic Drawer"
        placement="right"
        closable={true}
        onClose={() => setIsVisible(false)}
        open={open}
      >
        <Form name="invoice_form" onFinish={onFinish} layout="vertical" disabled={isCreating}>
          <Form.Item
            name="invoiceNumber"
            label="Invoice Number"
            rules={[{ required: true, message: 'Please input the invoice number!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="dateIssued"
            label="Date Issued"
            rules={[{ required: true, message: 'Please select the issue date!' }]}
          >
            <DatePicker />
          </Form.Item>

          <Form.Item
            name="dueDate"
            label="Due Date"
            rules={[{ required: true, message: 'Please select the due date!' }]}
          >
            <DatePicker />
          </Form.Item>

          <Form.Item
            name="totalAmount"
            label="Total Amount"
            rules={[{ required: true, message: 'Please input the total amount!' }]}
          >
            <InputNumber />
          </Form.Item>

          <Form.Item
            name="taxAmount"
            label="Tax Amount"
            rules={[{ required: true, message: 'Please input the tax amount!' }]}
          >
            <InputNumber />
          </Form.Item>

          <Form.Item
            name="supplierId"
            label="Supplier ID"
            rules={[{ required: true, message: 'Please input the supplier ID!' }]}
          >
            <InputNumber />
          </Form.Item>

          <Form.Item
            name="customerId"
            label="Customer ID"
            rules={[{ required: true, message: 'Please input the customer ID!' }]}
          >
            <Select options={clientsOptions} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
};
