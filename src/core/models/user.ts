export type User = {
  id?: number;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  email: string;
  enabled: boolean;
};

export type UserCredentials = {
  email: string;
  password: string;
};
