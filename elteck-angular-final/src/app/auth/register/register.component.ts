import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { matchPasswordGroup } from 'src/app/shared/validators/match-password-validator';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth'
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(
    public authService: AuthService
  ) { }

}
