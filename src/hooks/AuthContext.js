import { createContext, useCallback, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import api from '../services/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [data, setData] = useState(() => {
    const token = localStorage.getItem('Nave:token');
    const id = localStorage.getItem('Nave:id');

    if (token && id) {
      return { token, id };
    }

    navigate('/');
    return {};
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('users/login', {
      email,
      password,
    });

    const { token, id } = response.data;

    localStorage.setItem('Nave:token', token);
    localStorage.setItem('Nave:id', id);

    setData({ token, id });
    navigate('/navers');
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('Nave:token');
    localStorage.removeItem('Nave:id');

    setData({});
    navigate('/');
  });

  return (
    <AuthContext.Provider value={{ id: data.id, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider ');
  }

  return context;
};
