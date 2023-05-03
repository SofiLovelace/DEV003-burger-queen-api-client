import { EmailValidator } from '@angular/forms';

export interface IUsers {
  email: string;
  password: string;
  role: 'admin' | 'chef' | 'waiter';
  id: number;
}
