import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { matchPasswordGroup } from 'src/app/shared/validators/match-password-validator';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  form = this.fb.group({
    email: [
      '',
      [Validators.required, Validators.email, Validators.minLength(6)],
    ],
    pass: this.fb.group(
      {
        password: ['', [Validators.required, Validators.minLength(6)]],
        rePassword: [],
      },
      { validators: [matchPasswordGroup('password', 'rePassword')] }
    ),
  });

  constructor(public authService: AuthService, private fb: FormBuilder,  private router: Router) {}

  registerMe() {
    if (this.form.invalid) {
      return;
    }
    const { email, pass: {password} = {} } = this.form.value;
    this.authService.SignUp(email!, password!).then((result) => {
      if (result) {
        let code = result.code;
        switch (code) {
          case 'auth/email-already-in-use':
            alert('Email already in use!');
            break;
          case 'auth/invalid-email':
            alert('Invalid email!');
            break;
          case 'auth/weak-password':
            alert('Weak password!');
            break;
          default:
            alert('Unknown error! Please contact the administrator!');
            break;
        }
      }else {
        this.router.navigate(['/login']);
      }
    });
  }
}
