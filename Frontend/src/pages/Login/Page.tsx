import React from 'react';
import { useMutation } from 'react-query';

import { App, Button, Card, Checkbox, Form, Input, Row, Typography } from 'antd';
import axios from 'axios';

import { useAuth } from '@/store/context/auth';

type FieldType = {
  username: string;
  password: string;
  remember?: boolean;
};

const API_URL = import.meta.env.VITE_API_URL;

const sendLoginRequest = async (data: FieldType) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, data);
    return response.data;
  } catch (error) {
    // You can handle errors more specifically here if you want
    throw error;
  }
};

export const LoginPage: React.FC = () => {
  const { login } = useAuth();
  const { notification } = App.useApp();

  const { mutateAsync } = useMutation(sendLoginRequest, {
    onSuccess: ({ access_token }) => {
      // Handle successful response
      notification.success({ message: 'Login successful' });
      login?.(access_token);
    },
    onError: (error) => {
      // Handle error response
      console.error('Login failed:', error);
    },
  });

  const onFinish = (values: FieldType) => {
    mutateAsync(values);
  };

  return (
    <Row justify={'center'}>
      <Card style={{ width: 650 }}>
        <Typography.Title>Welcome to Uctenka</Typography.Title>
        <Typography.Title level={4}>Please enter your credentials to login in</Typography.Title>

        <Form
          name="basic"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item<FieldType>
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Row>
  );
};
