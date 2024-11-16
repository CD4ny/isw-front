import { Outlet } from 'react-router-dom';
import { ToggleDarkFloatingButton } from './components';

const AuthLayout = () => {
  return (
    <div className="px-5 min-h-screen flex items-center justify-center">
      <ToggleDarkFloatingButton />
      <Outlet />
    </div>
  );
};

export default AuthLayout;
