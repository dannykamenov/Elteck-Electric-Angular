import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { getAuth, updateProfile } from "firebase/auth";

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent {
  isUpdating: boolean = false;
  constructor(public authService: AuthService) {}

  changeDisplay() {
    this.isUpdating = true;
  }

  updateProfile(name:any, photoUrl:any) {
    console.log(name, photoUrl);
  }
}
