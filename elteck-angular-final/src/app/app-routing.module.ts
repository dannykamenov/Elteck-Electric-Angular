import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './info/about/about.component';
import { ContactComponent } from './info/contact/contact.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './auth/verify-email/verify-email.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { MyProfileComponent } from './auth/my-profile/my-profile.component';
import { GalleryComponent } from './elteck/gallery/gallery.component';
import { AuthGuard2 } from './shared/guard/verified.guard'
import { ReviewPageComponent } from './elteck/review-page/review-page.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent, data: {title: 'Home'}},
  {path: 'about', component: AboutComponent, data: {title: 'About'}},
  {path: 'my-profile', component: MyProfileComponent, data: {title: 'My Profile'}, canActivate: [AuthGuard]},
  {path: 'contact', component: ContactComponent, data: {title: 'Contact Us'}, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent, data: {title: 'Login'}, canActivate: [AuthGuard2]},
  {path: 'register', component: RegisterComponent, data: {title: 'Register'}, canActivate: [AuthGuard2]},
  {path: 'forgot-password', component: ForgotPasswordComponent, data: {title: 'Forgot Password'}, canActivate: [AuthGuard2]},
  {path: 'verify-email', component: VerifyEmailComponent, data: {title: 'Verify Email'}, canActivate: [AuthGuard2]},
  {path: 'gallery', component: GalleryComponent, data: {title: 'Gallery'}, canActivate: [AuthGuard]},
  {path: 'reviews', component: ReviewPageComponent, data: {title: 'Reviews'}, canActivate: [AuthGuard]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
