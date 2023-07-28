import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  constructor(public authService: AuthService) {}

  logIn(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const {userName, userPassword } = form.value;
    this.authService.SignIn(userName, userPassword);
  }


}
