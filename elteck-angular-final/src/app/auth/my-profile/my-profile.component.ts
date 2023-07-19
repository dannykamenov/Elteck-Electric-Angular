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
  public file: any

  changeDisplay() {
    this.isUpdating = true;
    const auth = getAuth();
    console.log(auth.currentUser)
  }

  detectFiles(event: any) {
    this.file = event.target.files[0];
  }

  updateProfile(name: any) {
    const auth = getAuth();
/*     updateProfile(auth.currentUser!, {
      displayName: name? name : auth.currentUser?.displayName,
      photoURL: photoUrl? photoUrl : auth.currentUser?.photoURL,
    }); */
    this.isUpdating = false;

  }
}
