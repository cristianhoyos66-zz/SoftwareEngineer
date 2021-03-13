import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConstants } from '../app.constants';
import { LoggedUserService } from './logged-user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private loggedUserService: LoggedUserService
  ) {}

  async isAuthenticated(): Promise<boolean> {
    const authUserId = localStorage.getItem('auth-user-id');
    if (authUserId) {
      let response: any = await this.getAuthenticatedUserById(
        authUserId
      ).toPromise();
      this.loggedUserService.setLoggedUser(response.data);
      return true;
    } else {
      return false;
    }
  }

  login(body: Object): Observable<Object> {
    return this.http.post(`${AppConstants.apiHost}/login`, body);
  }

  getAuthenticatedUserById(userId: string): Observable<Object> {
    const params = new HttpParams().set('user_id', userId);
    return this.http.get(`${AppConstants.apiHost}/auth-employee`, { params });
  }
}
