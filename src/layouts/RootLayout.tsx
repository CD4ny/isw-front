import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div>
      <div className="text-4xl bg-primary/30 p-10 rounded-md">
        Root layout example
      </div>
      <Outlet />
    </div>
  );
};

export default RootLayout;
