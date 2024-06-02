import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ Element }) => {

  const token = localStorage.getItem('authToken');
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return Element;
};

export default ProtectedRoute;
