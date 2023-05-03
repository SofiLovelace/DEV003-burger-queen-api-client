//import { EmailValidator } from "@angular/forms"

interface IUser {
  email: string;
  role: 'admin' | 'waiter' | 'chef';
  id: number;
}

export interface IResponseAuth {
  accessToken: string;
  user: IUser;
}

export interface IErrorAuth {
  error: string;
}
