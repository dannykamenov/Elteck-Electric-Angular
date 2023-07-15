import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { matchPasswordGroup } from 'src/app/shared/validators/match-password-validator';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerForm!: FormGroup

  constructor(private formBuilder: FormBuilder, private auth: Auth) { 
    this.registerForm = this.formBuilder.group({
      email: formBuilder.control('', [Validators.required, Validators.email, Validators.minLength(6)]),
      pass: this.formBuilder.group({
        password: formBuilder.control('', [Validators.required, Validators.minLength(6)]),
        rePassword: []
      }, {
        validators: [matchPasswordGroup('password', 'rePassword')]
      }
      ),

    })
  }

  public onSubmit() {
    if(this.registerForm.invalid) {
      return
    }
    createUserWithEmailAndPassword(this.auth, this.registerForm.value.email, this.registerForm.value.pass.password)
      .then((res:any) => {
        console.log(res)
      }).catch((err) => {
        alert(err.message)
      })
  }

}
