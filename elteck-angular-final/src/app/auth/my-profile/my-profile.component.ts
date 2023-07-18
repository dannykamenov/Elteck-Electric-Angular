import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { getAuth, updateProfile } from 'firebase/auth';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss'],
})
export class MyProfileComponent {
  isUpdating: boolean = false;
  constructor(public authService: AuthService) {}

  changeDisplay() {
    this.isUpdating = true;
    const auth = getAuth();
    console.log(auth.currentUser)
  }

  updateProfile(name: any, photoUrl: any) {
    const auth = getAuth();
    console.log(photoUrl)
/*     updateProfile(auth.currentUser!, {
      displayName: name? name : auth.currentUser?.displayName,
      photoURL: photoUrl? photoUrl : auth.currentUser?.photoURL,
    }); */
    this.isUpdating = false;

  }
}
