import { Injectable } from '@angular/core';
import { LoggedUser } from '../models/logged-user';

@Injectable({
  providedIn: 'root'
})
export class LoggedUserService {
  loggedUser: LoggedUser;

  constructor() {}

  setLoggedUser(user: any): void {
    this.loggedUser = user;
  }
}
