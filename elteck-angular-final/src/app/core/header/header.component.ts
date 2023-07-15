import { Component, ElementRef } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  menuActive: boolean = false;
  opacityActive: boolean = true;

  get isLoggedIn() {
    return this.authService.isLoggedIn;
  }

    constructor(public authService: AuthService) { 
    }

  menuToggle() {
    this.menuActive = !this.menuActive;
    this.opacityActive = !this.opacityActive;
  }


}
