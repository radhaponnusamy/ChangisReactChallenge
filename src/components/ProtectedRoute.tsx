import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; // Adjust the path as needed
import { Role } from '../types/Role'; // Adjust the path as needed

interface ProtectedRouteProps {
  element: React.ReactElement;
  requiredRole: Role | Role[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element, requiredRole }) => {
  const { isAuthenticated, userRole } = useAuth();

  console.log('ProtectedRoute:', { isAuthenticated, userRole, requiredRole });

  // Convert requiredRole to an array if it's a single role
  const requiredRolesArray = Array.isArray(requiredRole) ? requiredRole : [requiredRole];

  if (!isAuthenticated) {
    console.log('User is not authenticated, redirecting to /login');
    return <Navigate to="/login" />;
  }

  if (!requiredRolesArray.includes(userRole)) {
    console.log(`User role (${userRole}) does not match required roles (${requiredRolesArray.join(', ')}), redirecting to /login`);
    return <Navigate to="/login" />;
  }

  return element;
};

export default ProtectedRoute;
