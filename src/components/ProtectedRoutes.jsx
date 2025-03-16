
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthProvider';

export const ProtectedRoutes = ({allowedRoles}) => {

    const { isAuthenticated, roles } = useAuth();


    if(!isAuthenticated) {
        return <Navigate to="/login" replace/>
    }

    if (!roles.some((role) => allowedRoles.includes(role))) {
        return <Navigate to="/login" replace />;
      }

  return <Outlet/>;
}
