import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  menuActive: boolean = false;
  opacityActive: boolean = true;


  menuToggle() {
    this.menuActive = !this.menuActive;
    this.opacityActive = !this.opacityActive;
  }
}
