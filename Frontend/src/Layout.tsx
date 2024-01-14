import { useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { LogoutOutlined } from '@ant-design/icons';
import { Button, Col, Layout, Menu, Row, Select, Space, Typography, theme } from 'antd';
import { ItemType } from 'antd/es/menu/hooks/useItems';

import { useGetClient } from './api/hooks/client/getClient';
import routes from './routes';
import { useAuth } from './store/context/auth';
import { currentClientState } from './store/currentClient';
import { FCC } from './@types/types';

import { Trans } from 'react-i18next';
import { useLocale } from './hooks/useLocale';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = ItemType & {
  isCommon?: boolean;
  isHidden?: boolean;
  isIntro?: boolean;
};

const items: MenuItem[] = Object.values(routes)
  .filter((route) => route?.title)
  .map((route) => {
    return {
      key: route.path ?? '',
      icon: route.icon,
      label: route.title,
      isCommon: route.isCommon,
      isHidden: route.isHidden,
      isIntro: route.isIntro,
    };
  });

export const AppLayout: FCC = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { logout, authToken } = useAuth();

  const { changeLocale, locale } = useLocale();

  const location = useLocation();

  const navigate = useNavigate();

  const current_client_id = useMemo(() => sessionStorage.getItem('current_client_id'), []);
  const isClientSelected = !!current_client_id;

  const [currentClient, setCurrentClient] = useRecoilState(currentClientState);

  const { data: fetchedCurrentCLient, isLoading } = useGetClient(
    current_client_id !== currentClient?.id?.toString() ? current_client_id : undefined,
  );

  useEffect(() => {
    if (!currentClient && current_client_id && !isLoading) {
      setCurrentClient(fetchedCurrentCLient);
    }
  }, [current_client_id, isLoading, fetchedCurrentCLient, currentClient]);

  const selectedKey = location.pathname;

  const menuItems = (
    isClientSelected
      ? items.filter(({ isIntro }) => !isIntro)
      : items.filter(({ isCommon }) => isCommon)
  ).filter((route) => !route?.isHidden);

  const handleLogout = () => {
    logout?.();
    navigate('/login');
    setCurrentClient(null);
    sessionStorage.removeItem('current_client_id');
  };

  return (
    <Layout hasSider>
      <Sider
        hidden={!authToken}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <Menu
          hidden={!authToken}
          theme="dark"
          mode="inline"
          selectedKeys={[selectedKey]}
          onSelect={({ key }) => navigate(key)}
          items={menuItems}
        />
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header hidden={!authToken} style={{ padding: 0, background: colorBgContainer }}>
          <Row justify={'space-between'} align={'middle'}>
            <Col>
              <Typography.Title style={{ margin: 0, paddingLeft: 16 }} level={3}>
                {currentClient?.businessName ?? <Trans i18nKey="userMessagesUnread" />}
              </Typography.Title>
            </Col>
            <Space direction="horizontal">
              <Col style={{ margin: 0, paddingRight: 16 }}>
                <Select
                  options={[
                    { label: '🇬🇧', value: 'en' },
                    { label: '🇨🇿', value: 'cs' },
                  ]}
                  value={locale}
                  onChange={(newLocale) => changeLocale(newLocale)}
                ></Select>
              </Col>

              <Col style={{ margin: 0, paddingRight: 16 }}>
                <Button icon={<LogoutOutlined />} onClick={handleLogout}>
                  Logout
                </Button>
              </Col>
            </Space>
          </Row>
        </Header>
        <Content style={{ margin: '24px 16px 0', height: 'max-content' }}>{children}</Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};
