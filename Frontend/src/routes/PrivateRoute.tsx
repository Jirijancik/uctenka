// PrivateRoute.js
import { Navigate } from 'react-router-dom';

import { useAuth } from '@/store/context/auth';
import { FCC } from '@/@types/types';

export const PrivateRoute: FCC<{ isPrivate: boolean }> = ({ children, isPrivate }) => {
  const { authToken } = useAuth();

  if (!isPrivate) {
    return children;
  }

  return authToken ? children : <Navigate to="/login" />;
};
