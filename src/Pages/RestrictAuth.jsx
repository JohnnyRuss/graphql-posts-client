import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { AppContext } from '../store/context/app';

function RestrictAuth() {
  const { user } = useContext(AppContext);

  return user ? <Navigate to='/' /> : <Outlet />;
}

export default RestrictAuth;
