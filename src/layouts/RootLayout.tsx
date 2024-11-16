import { Outlet } from 'react-router-dom';
import { SidebarProvider, SidebarTrigger } from '@components';
import { AppSideBar } from './components';

const RootLayout = () => {
  return (
    <SidebarProvider>
      <AppSideBar />
      <main className="w-full ">
        <header className="pl-2 sm:pl-4 lg:pl-6 pr-4 py-1 ">
          <SidebarTrigger />
        </header>

        <div className="px-4 sm:px-6 lg:px-8 pt-4 ">
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  );
};

export default RootLayout;
