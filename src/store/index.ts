import { useUserStore } from './models';

const useStore = () => ({
  user: useUserStore(),
});

export { useUserStore };

export default useStore;
