import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/auth/components/login';
import Solicitud from './pages/auth/components/forms/crear_solicitud';

function App() {
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
      element: <Solicitud />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
