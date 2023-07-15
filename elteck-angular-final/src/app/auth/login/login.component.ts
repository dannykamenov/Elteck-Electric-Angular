import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Auth } from '@angular/fire/auth'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm!: FormGroup

  constructor(private formBuilder: FormBuilder, private auth: Auth) { 
    this.loginForm = this.formBuilder.group({
      email: formBuilder.control('', [Validators.required, Validators.email, Validators.minLength(6)]),
      pass: formBuilder.control('', [Validators.required, Validators.minLength(6)])
    })
  }

  public onSubmit() {
    
  }

}
