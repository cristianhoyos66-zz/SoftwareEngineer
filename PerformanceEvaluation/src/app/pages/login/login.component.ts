import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { LoggedUserService } from 'src/app/auth/logged-user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private loggedUserService: LoggedUserService
  ) {}

  ngOnInit(): void {}

  login(): void {
    this.authService
      .login({
        username: this.username,
        password: this.password
      })
      .subscribe(
        (response: any) => {
          this.onLoginSuccess(response);
        },
        (error) => {
          this.onLoginError();
        }
      );
  }

  private onLoginSuccess(response: any): void {
    this.populateLoggedUser(response);
    this.router.navigate(['self-assessment']);
  }

  private populateLoggedUser(response: any) {
    const user = response.data;
    localStorage.setItem('auth-user-id', user.idNumber);
    this.loggedUserService.setLoggedUser(user);
  }

  private onLoginError(): void {
    Swal.fire({
      title: 'Error!',
      text: 'User and pass are not valid!',
      icon: 'error',
      confirmButtonText: 'Got it!'
    });
  }
}
