import React from 'react';
import { useMutation } from 'react-query';

import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

type FieldType = {
  username: string;
  password: string;
};

const API_URL = import.meta.env.VITE_API_URL;

const sendLoginRequest = async (data: FieldType) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, data);
    return response.data;
  } catch (error) {
    // You can handle errors more specifically here if you want
    throw error;
  }
};

export const RegisterPage: React.FC = () => {
  const { mutateAsync } = useMutation(sendLoginRequest, {
    onSuccess: (data) => {
      // Handle successful response
      console.log('Login successful:', data);
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
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
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

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
