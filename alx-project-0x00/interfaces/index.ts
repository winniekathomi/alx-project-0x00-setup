// alx-project-0x00/interfaces/index.ts

export interface User {
  id: string;
  name: string;
  email: string;
  isLoggedIn: boolean;
}

export interface Theme {
  mode: 'light' | 'dark';
}
