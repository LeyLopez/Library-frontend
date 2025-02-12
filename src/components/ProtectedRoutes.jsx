import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

export const ProtectedRoutes = ({allowedRoles}) => {

    const { auth , loading} = useContext(AuthContext);

    if(loading) {
            return <div>Cargando...</div>
        }

    if(!auth) {
        return <Navigate to="/login" replace/>
    }

    if(!allowedRoles.includes(auth.role)) {
        return <Navigate to="/login" replace/>
    }

  return <Outlet/>;
}
