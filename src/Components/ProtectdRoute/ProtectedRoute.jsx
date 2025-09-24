import { Navigate, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { DataContext } from '../DataProvider/DataProvider';

const ProtectedRoute = ({ children, msg, redirect }) => {
  const [{ user }] = useContext(DataContext);
  const location = useLocation();

  if (!user) {
    return (
      <Navigate to="/auth" state={{ msg, redirect: location.pathname }} replace />
    );
  }

  return children;
};

export default ProtectedRoute;
