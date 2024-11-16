import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from '@pages/auth/components/login';
import Solicitudes from '@pages/solicitudes/components/Solicitudes';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <div className="">Hello world!</div>,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/solicitud',
      element: <Solicitudes />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
