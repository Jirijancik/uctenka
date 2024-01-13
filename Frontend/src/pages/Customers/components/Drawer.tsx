import React, { useEffect, useMemo } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { useRecoilValue, useResetRecoilState } from 'recoil';

import { Button, Col, DatePicker, Drawer, Form, Input, InputNumber, Row, Space } from 'antd';
import dayjs from 'dayjs';

import { useCreateClient } from '@/api/hooks/client/createClient';
import { useGetARESClient } from '@/api/hooks/client/getARESClient';
import { useGetClient } from '@/api/hooks/client/getClient';
import { useEditClient } from '@/api/hooks/client/useEditClient';
import { ClientFormValues, IARESClientResponse } from '../types';
import { selectedClientIdState } from '../store/selectedClientIdState';

const { Search } = Input;

const responsiveLayout = {
  xs: 24, // full width on small screens
  sm: 24, // half width on medium screens
  md: 12, // one-third width on large screens
  lg: 12, // one-third width on larger screens
  xl: 12, // one-third width on ultra-wide screens
  xxl: 8,
};

export interface CreateDrawerProps {
  open: boolean;
  setIsVisible: (newState: boolean) => void;
}

export const CreateDrawer: React.FC<CreateDrawerProps> = (props) => {
  const { setIsVisible, open } = props;
  const [form] = Form.useForm<ClientFormValues>();

  // get id from url
  const editClientId = useRecoilValue(selectedClientIdState);
  const resetID = useResetRecoilState(selectedClientIdState);

  const queryClient = useQueryClient();

  const handleOnEditClient = () => {
    // Invalidate and refetch
    setIsVisible(false);
    resetID();
  };

  const { data } = useGetClient(editClientId?.toString()) ?? undefined;
  const { mutateAsync: editClient, isLoading: isEditing } = useEditClient(handleOnEditClient);

  useEffect(() => {
    if (data) {
      const formattedData = { ...data, establishmentDate: dayjs(data.establishmentDate) };

      form.setFieldsValue(formattedData);
    }
  }, [data]);

  const handleOnGetAresClient = useMemo(
    () => (fetchedAresClient: ClientFormValues) => {
      const clientWithParsedDate = {
        ...fetchedAresClient,
        establishmentDate: dayjs(fetchedAresClient.establishmentDate),
      };

      // You can use the queryClient to set query data manually
      queryClient.setQueryData(['clients', 'form-field-values'], clientWithParsedDate);
      if (clientWithParsedDate) {
        form.setFieldsValue(clientWithParsedDate);
      }
    },
    [],
  );

  const { isLoading: isFetchingAresData, mutateAsync: getARESClient } =
    useGetARESClient(handleOnGetAresClient);

  const handleOnCreateClient = () => {
    // Invalidate and refetch
    queryClient.invalidateQueries({ queryKey: ['clients'] });
    setIsVisible(false);
  };

  const handleOnClose = () => {
    setIsVisible(false);
    form.resetFields();
  };

  const { isLoading: isCreatingClient, mutateAsync: createClient } =
    useCreateClient(handleOnCreateClient);

  const handleSubmit = (clientFormValues: ClientFormValues) => {
    if (editClientId) {
      editClient({ id: editClientId, ...clientFormValues });
    } else {
      createClient(clientFormValues);
    }
  };

  return (
    <>
      <Drawer
        destroyOnClose
        title="Create a new account 02052725"
        width={720}
        closable
        onClose={handleOnClose}
        open={open}
        styles={{
          body: {
            paddingBottom: 80,
          },
        }}
      >
        <Form
          form={form}
          name="clientForm"
          onFinish={(values) => handleSubmit(values)}
          layout="vertical"
        >
          <Row gutter={[16, 16]}>
            <Col {...responsiveLayout}>
              <Form.Item
                name="identificationNumber"
                label="Identification Number"
                rules={[{ required: true, message: 'Please input the identification number!' }]}
              >
                <Search
                  placeholder="search for ICO"
                  allowClear
                  enterButton
                  loading={isCreatingClient || isFetchingAresData}
                  onSearch={(value) => getARESClient(value)}
                />
              </Form.Item>
            </Col>

            <Col {...responsiveLayout}>
              <Form.Item
                name="businessName"
                label="Business Name"
                rules={[{ required: true, message: 'Please input the business name!' }]}
              >
                <Input />
              </Form.Item>
            </Col>

            <Col {...responsiveLayout}>
              <Form.Item
                name="legalForm"
                label="Legal Form"
                rules={[{ required: true, message: 'Please input the legal form!' }]}
              >
                <Input />
              </Form.Item>
            </Col>

            <Col {...responsiveLayout}>
              <Form.Item
                name="establishmentDate"
                label="Establishment Date"
                rules={[{ required: true, message: 'Please select the establishment date!' }]}
              >
                <DatePicker style={{ width: '100%' }} />
              </Form.Item>
            </Col>

            <Col {...responsiveLayout}>
              <Form.Item name="taxIdentificationNumber" label="Tax Identification Number">
                <Input />
              </Form.Item>
            </Col>

            <Col {...responsiveLayout}>
              <Form.Item
                name="countryCode"
                label="Country Code"
                rules={[{ required: true, message: 'Please input the country code!' }]}
              >
                <Input />
              </Form.Item>
            </Col>

            <Col {...responsiveLayout}>
              <Form.Item
                name="countryName"
                label="Country Name"
                rules={[{ required: true, message: 'Please input the country name!' }]}
              >
                <Input />
              </Form.Item>
            </Col>

            <Col {...responsiveLayout}>
              <Form.Item
                name="municipalityName"
                label="Municipality Name"
                rules={[{ required: true, message: 'Please input the municipality name!' }]}
              >
                <Input />
              </Form.Item>
            </Col>

            <Col {...responsiveLayout}>
              <Form.Item
                name="streetName"
                label="Street Name"
                rules={[{ required: true, message: 'Please input the street name!' }]}
              >
                <Input />
              </Form.Item>
            </Col>

            <Col {...responsiveLayout}>
              <Form.Item
                name="houseNumber"
                label="House Number"
                rules={[{ required: true, message: 'Please input the house number!' }]}
              >
                <InputNumber style={{ width: '100%' }} />
              </Form.Item>
            </Col>

            <Col {...responsiveLayout}>
              <Form.Item
                name="postalCode"
                label="Postal Code"
                rules={[{ required: true, message: 'Please input the postal code!' }]}
              >
                <InputNumber style={{ width: '100%' }} />
              </Form.Item>
            </Col>

            <Col {...responsiveLayout}>
              <Form.Item
                name="fullAddress"
                label="Full Address"
                rules={[{ required: true, message: 'Please input the full address!' }]}
              >
                <Input />
              </Form.Item>
            </Col>

            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};
