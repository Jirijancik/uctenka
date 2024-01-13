import React from 'react';
import { useMutation } from '@tanstack/react-query';
import { App, Button, Card, Checkbox, Col, Form, Input, Row,  Typography } from 'antd';
import axios from 'axios';

import { useAuth } from '@/store/context/auth';
import { authService } from '@/api/service/auth';

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

// send register request
const sendRegisterRequest = async (data: FieldType) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, data);
    return response.data;
  } catch (error) {
    // You can handle errors more specifically here if you want
    throw error;
  }
};

export const LoginPage: React.FC = () => {
  const { login } = useAuth();
  const { notification } = App.useApp();

  //form
  const [form] = Form.useForm();

  // get current form fields values
  const fields = form.getFieldsValue();

  const { mutateAsync } = useMutation(authService.login, {
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

  // register mutation
  const { mutateAsync: registerMutation } = useMutation(authService.register, {
    onSuccess: ({ access_token }) => {
      // Handle successful response
      notification.success({ message: 'Register successful' });
      login?.(access_token);
    },
    onError: (error) => {
      // Handle error response
      console.error('Register failed:', error);
    },
  });

  const onFinish = (values: FieldType) => {
    mutateAsync(values);
  };

  return (
    <Row justify={'center'}>
      <Card style={{ width: 650 }}>
        <Typography.Title>Welcome to Uctenka!</Typography.Title>
        <Typography.Title level={4}>Please enter your credentials to login in</Typography.Title>

        <Form
          name="basic"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
          form={form}
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

          <Row wrap={false} gutter={20}>
            <Col offset={4}>
              <Form.Item<FieldType> name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
            </Col>

            <Col>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Col>

            <Col>
              <Button onClick={() => registerMutation(fields)}>Register</Button>
            </Col>
          </Row>
        </Form>
      </Card>
    </Row>
  );
};
