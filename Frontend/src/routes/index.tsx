import { BarChartOutlined, FormOutlined, HeatMapOutlined, UserOutlined } from '@ant-design/icons';

import asyncComponentLoader from '@/utils/loader';

import { Routes } from './types';

const routes: Routes = {
  // Hidden routes
  Register: {
    component: asyncComponentLoader(() => import('@/pages/Register')),
    path: '/register',
    title: 'Register',
    isPrivate: false,
    isCommon: true,
    isHidden: true,
  },
  Login: {
    component: asyncComponentLoader(() => import('@/pages/Login')),
    path: '/login',
    title: 'Login',
    isPrivate: false,
    isCommon: true,
    isHidden: true,
  },
  NotFound: {
    component: asyncComponentLoader(() => import('@/pages/NotFound')),
    path: '*',
    isPrivate: false,
    isCommon: true,
    isHidden: true,
  },
  // On non-selected client
  Dashboard: {
    component: asyncComponentLoader(() => import('@/pages/Dashboard')),
    path: '/',
    title: 'Dashboard',
    icon: <BarChartOutlined />,
    isPrivate: true,
    isCommon: true,
  },
  Customers: {
    component: asyncComponentLoader(() => import('@/pages/Customers')),
    path: '/customers',
    title: 'Customers',
    icon: <UserOutlined />,
    isPrivate: true,
    isCommon: true,
    isIntro: true,
  },
  // Rest of the app
  Invoices: {
    component: asyncComponentLoader(() => import('@/pages/Invoices')),
    path: '/invoices',
    title: 'Invoices',
    icon: <FormOutlined />,
    isPrivate: true,
  },
};

export default routes;
