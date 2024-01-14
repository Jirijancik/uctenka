import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { App, Button, Card, Checkbox, Col, Form, Input, Row, Typography } from 'antd';
import axios from 'axios';

import { useAuth } from '@/store/context/auth';
import { authService } from '@/api/service/auth';
import { RegisterDrawer } from './components/Drawer';

type FieldType = {
  username: string;
  password: string;
  remember?: boolean;
};

export const LoginPage: React.FC = () => {
  const { login } = useAuth();
  const { notification } = App.useApp();
  const [open, setOpen] = useState(false);

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
    <>
      <RegisterDrawer open={open} setIsVisible={setOpen}></RegisterDrawer>

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
                <Button onClick={() => setOpen(true)}>Register</Button>
              </Col>
            </Row>
          </Form>
        </Card>
      </Row>
    </>
  );
};
