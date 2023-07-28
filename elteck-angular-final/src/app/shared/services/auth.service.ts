import { Injectable, NgZone } from '@angular/core';
import { User } from '../services/user';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any; // Save logged in user data
  constructor(
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone, // NgZone service to remove outside scope warning
  ) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }
  // Sign in with email/password
  SignIn(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.SetUserData(result.user);
        setTimeout(() => {
          this.afAuth.authState.subscribe((user) => {
            if (user) {
              this.router.navigate(['/']);
            }
          });
        }, 100);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
  // Sign up with email/password
  SignUp(email: string, password: string) {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.SendVerificationMail();
        this.SetUserData(result.user);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
  // Send email verfificaiton when new user sign up
  SendVerificationMail() {
    return this.afAuth.currentUser
      .then((u: any) => u.sendEmailVerification())
      .then(() => {
        this.router.navigate(['verify-email']);
      });
  }
  // Reset Forgot password
  ForgotPassword(passwordResetEmail: string) {
    return this.afAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      })
      .catch((error) => {
        window.alert(error);
      });
  }
  // Returns true when user is logged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null && user.emailVerified !== false ? true : false;
  }
  // Sign in with Google
  GoogleAuth() {
    this.AuthLogin(new auth.GoogleAuthProvider()).then((res: any) => {
      this.router.navigate(['/']);
    });
  }
  // Auth logic to run auth providers
//  AuthLogin(provider: any) {
/*     return this.afAuth
      //.signInWithPopup(provider)
      .signInWithRedirect(provider)
      .then((result) => {
        this.router.navigate(['/']);
        this.SetUserData(result.user);
      })
      .catch((error) => {
        window.alert(error);
      }); */

/*      return this.afAuth.signInWithRedirect(provider)
      .then((result) => {
        this.router.navigate(['/']);
        this.afAuth.getRedirectResult()
        .then((result) => {
          if (result.user) {
            // The user is signed in, and you can access the user object here
            const user = result.user;
            console.log('Redirect-based sign-in successful!', user);
            this.router.navigate(['/']); 
            this.SetUserData(user); 
          }
        })
        .catch((error) => {
          console.error(error);
        });
      })
  }*/

  async AuthLogin(provider: any) {
    try {
      await this.afAuth.signInWithRedirect(provider);
      const result = await this.afAuth.getRedirectResult();
      if (result.user) {
        const user = result.user;
        this.SetUserData(user); 
        this.router.navigate(['/']); 
      } else {
        this.router.navigate(['/']); 
      }
    } catch (error) {
    }
  }


  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }
  // Sign out
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['/']);
    });
  }
}