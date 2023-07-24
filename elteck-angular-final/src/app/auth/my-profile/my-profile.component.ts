import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { getAuth, updateProfile } from 'firebase/auth';
import { AngularFireStorage } from '@angular/fire/compat/storage';
/* import {
  Storage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from '@angular/fire/storage'; */

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss'],
})
export class MyProfileComponent {
  isUpdating: boolean = false;
  constructor(public authService: AuthService, public storage: AngularFireStorage) {}
  public file: any;

  changeDisplay() {
    this.isUpdating = true;
    const auth = getAuth();
  }

  detectFiles(event: any) {
    this.file = event.target.files[0];
  }

  updateProfile(name: any) {
    const auth = getAuth();

/*     if (this.file) {
      const storageRef = ref(
        this.storage,
        `users/${auth.currentUser?.uid}/profile.jpg`
      );
      const uploadTask = uploadBytesResumable(storageRef, this.file);
      uploadTask.on('state_changed', (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);
      });
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        updateProfile(auth.currentUser!, {
          displayName: name ? name : auth.currentUser?.displayName,
          photoURL: downloadURL,
        });
      });
    }
 */

    if(this.file) {
      const storageRef = this.storage.ref(`users/${auth.currentUser?.uid}/profile.jpg`);
      const uploadTask = this.storage.upload(`users/${auth.currentUser?.uid}/profile.jpg`, this.file);
      uploadTask.percentageChanges().subscribe((percentage) => {
      });
      uploadTask.then((uploadTaskSnapshot) => {
        uploadTaskSnapshot.ref.getDownloadURL().then((downloadURL) => {
          updateProfile(auth.currentUser!, {
            displayName: name ? name : auth.currentUser?.displayName,
            photoURL: downloadURL,
          });
        });
      });
    }

    updateProfile(auth.currentUser!, {
      displayName: name ? name : auth.currentUser?.displayName,
    });
    this.isUpdating = false;
    this.file = null;
  }
}
