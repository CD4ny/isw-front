export const authRootRoute = '/auth';
export const rootRoute = '/';

const routes = {
  // Logged out
  login: authRootRoute + '/login',

  // Logged in
  dashboard: rootRoute + '/dashboard',
};

export default routes;
