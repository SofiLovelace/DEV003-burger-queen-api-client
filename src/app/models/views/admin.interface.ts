import { EmailValidator } from '@angular/forms';

export interface IUsers {
  email: EmailValidator;
  password: string;
  role: 'admin' | 'chef' | 'waiter';
  id: number;
}
