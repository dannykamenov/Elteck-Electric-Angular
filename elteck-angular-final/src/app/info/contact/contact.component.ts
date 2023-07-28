import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { getAuth } from 'firebase/auth';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  name: string = '';
  email: string = '';

  constructor(private builder: FormBuilder) { 

    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      this.name = user.displayName || '';
      this.email = user.email || '';
    }
  }

  sendEmail(e: Event) {
    e.preventDefault();
    
  }

}
