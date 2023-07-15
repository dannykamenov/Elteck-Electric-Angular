import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private auth: Auth, private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: formBuilder.control('', [
        Validators.required,
        Validators.email,
        Validators.minLength(6),
      ]),
      pass: formBuilder.control('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  public onSubmit() {
    signInWithEmailAndPassword(
      this.auth,
      this.loginForm.value.email,
      this.loginForm.value.pass
    )
      .then((res: any) => {
        console.log(res);
        this.router.navigate(['/']);
      })
      .catch((err) => {
        alert(err.message);
      });
  }
}
