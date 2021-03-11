import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { useAuth } from '../hooks/AuthContext';

const ProtectedRoute = (props) => {
  const { id } = useAuth();
  if (id) return <Route {...props} />;
  else if (!id) return <Navigate to="/" />;
  else return null;
};

export default ProtectedRoute;
