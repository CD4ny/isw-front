import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useRouter } from '@hooks';
import useStore from '@store';
import routes from '../routes';

const RoutesGuard = () => {
  const {
    user: { email },
  } = useStore();
  const router = useRouter();

  useEffect(() => {
    if (!email) {
      router.replace(routes.login);
    } else {
      router.replace(routes.dashboard);
    }
  }, [email, router]);

  return <Outlet />;
};

export default RoutesGuard;
