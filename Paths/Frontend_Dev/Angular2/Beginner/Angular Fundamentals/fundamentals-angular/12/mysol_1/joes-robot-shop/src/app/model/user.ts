export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
}

export interface UserCredentials {
  email: string;
  password: string;
}
