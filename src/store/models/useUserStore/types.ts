export interface User {
  id: string | null;
  email: string | null;
  name: string | null;

  setData: (key: 'id' | 'email' | 'name', data: string) => void;
}
