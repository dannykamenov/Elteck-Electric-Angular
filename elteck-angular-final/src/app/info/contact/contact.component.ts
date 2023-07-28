import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { getAuth } from 'firebase/auth';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  userDisplay: string = '';
  userContact: string = '';
  error: string = '';

  constructor() { 
  }

  ngOnInit(): void {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      this.userDisplay = user.displayName || '';
      this.userContact = user.email || '';
    }
  }

  async sendEmail(form: any) {
    emailjs.init('QFFBEaKsQxcqCDJWB')
    let response = await emailjs.send("service_xecc2np","template_mqmzbxv",{
      from_name: form.name,
      to_name: "Antoni",
      message: form.message,
      reply_to: form.email,
      });
  }

}
