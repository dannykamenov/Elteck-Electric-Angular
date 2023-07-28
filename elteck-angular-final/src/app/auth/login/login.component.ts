import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  error: string = '';

  constructor(public authService: AuthService, private router: Router) {}

  logIn(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const {userName, userPassword } = form.value;
    this.authService.SignIn(userName, userPassword).then((result) => {
      if (result) {
        let code = result.code;
        switch (code) {
          case 'auth/user-not-found':
            this.error = 'User not found';
            break;
          case 'auth/wrong-password':
            this.error = 'Wrong password or email!';
            break;
          case 'auth/too-many-requests':
            this.error = 'Too many requests, please try again later!';
            break;
          case 'auth/user-disabled':
            this.error = 'User is disabled!';
            break;
          case 'auth/invalid-email':
            this.error = 'Invalid email!';
            break;
          default:
            this.error = 'Unknown error! Please contact the administrator!';
            break;
        }
      }
    });
  }


}
