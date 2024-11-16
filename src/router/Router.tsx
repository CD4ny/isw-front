import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from '@pages/auth/components/login';
import { AuthLayout, RootLayout } from '@layouts';
import routes, { authRootRoute, rootRoute } from './routes';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: authRootRoute,
      element: <AuthLayout />,
      errorElement: <div className="text-red-500 text-4xl">Error</div>,
      children: [
        // the first and second children are the same so we can use the "/" and "/login" path
        {
          path: authRootRoute,
          element: <Login />,
        },
        {
          path: routes.login,
          element: <Login />,
        },
      ],
    },
    {
      path: rootRoute,
      element: <RootLayout />,
      errorElement: <div className="text-red-500 text-4xl">Error</div>,
      children: [
        // the first and second children are the same so we can use the "/" and "/home" path
        {
          path: rootRoute,
          element: <div>home</div>,
        },
        {
          path: routes.home,
          element: <div>home</div>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
