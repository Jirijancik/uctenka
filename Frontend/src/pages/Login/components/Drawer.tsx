import { Button, Col, Drawer, Form, Input, Row } from 'antd';
import axios from 'axios';
import React from 'react';

const API_URL = import.meta.env.VITE_API_URL;

type ClientFormValues = {
  username: string;
  password: string;
  email: string;
  role: string;
};

// send register request
const sendRegisterRequest = async (data: ClientFormValues) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, data);
    return response.data;
  } catch (error) {
    // You can handle errors more specifically here if you want
    throw error;
  }
};

export interface RegisterDrawerProps {
  open: boolean;
  setIsVisible: (newState: boolean) => void;
}

export const RegisterDrawer: React.FC<RegisterDrawerProps> = (props) => {
  const { setIsVisible, open } = props;
  const [form] = Form.useForm<ClientFormValues>();

  const handleOnClose = () => {
    setIsVisible(false);
    form.resetFields();
  };

  const handleSubmit = (clientFormValues: ClientFormValues) => {
    sendRegisterRequest({ ...clientFormValues, role: 'admin' }).then(() => handleOnClose());
  };

  return (
    <>
      <Drawer
        destroyOnClose
        title="Register a new user"
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
          name="basic"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
          initialValues={{ remember: true }}
          onFinish={handleSubmit}
          autoComplete="off"
          form={form}
        >
          <Form.Item<ClientFormValues>
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<ClientFormValues>
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item<ClientFormValues>
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input />
          </Form.Item>

          <Row wrap={false} gutter={20}>
            <Col>
              <Button onClick={() => handleOnClose()}>Cancel</Button>
            </Col>

            <Col>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Register
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};
