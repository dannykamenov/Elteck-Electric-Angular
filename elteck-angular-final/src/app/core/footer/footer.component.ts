import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  get isLoggedIn() {
    return this.authService.isLoggedIn;
  }

    constructor(public authService: AuthService) { 
    }
}
