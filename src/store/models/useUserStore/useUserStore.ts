import { create } from 'zustand';
import { User } from './types';

const useUserStore = create<User>((set) => ({
  id: null,
  email: null,
  name: null,

  setData: (key, data) => set({ [key]: data }),
}));

export default useUserStore;
