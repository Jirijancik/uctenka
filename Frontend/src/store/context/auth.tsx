// AuthContext.js
import { createContext, useContext, useState } from 'react';

import { FCC } from '@/types';
import { useNavigate } from 'react-router-dom';

export type AuthContextType = {
  authToken?: string | null | undefined,
  login?: (token: string) => void
  logout?: () => void
}

const AuthContext = createContext<AuthContextType>({});

export const JWT_TOKEN_KEY = 'JWT_TOKEN';

export const AuthProvider: FCC = ({ children }) => {
  const [authToken, setAuthToken] = useState(localStorage.getItem(JWT_TOKEN_KEY));
  const navigate = useNavigate();


  const login = (jwtToken: string) => {
    localStorage.setItem(JWT_TOKEN_KEY, jwtToken);
    setAuthToken(jwtToken);
    navigate("/")
  };

  const logout = () => {
    localStorage.removeItem(JWT_TOKEN_KEY);
    setAuthToken(null);
    navigate("/login")
  };

  return (
    <AuthContext.Provider value={{ authToken, login, logout }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
