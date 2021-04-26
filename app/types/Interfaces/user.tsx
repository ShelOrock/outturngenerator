export interface User {
  id?: string;
  username: string | null;
  password: string | null;
  loggedIn: 'Online' | 'Offline';
  userType: 'Guest' | 'Standard' | 'Unconfirmed' | 'Admin';
}

export type Users = User[];