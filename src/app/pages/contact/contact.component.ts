import { Component } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  public sendEmail(e: Event) {
    e.preventDefault();

    emailjs
      .sendForm('service_edi86rv', 'template_dway8kg', e.target as HTMLFormElement, {
        publicKey: 'fccmKogGdVyzolAc-',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        },
      );
  }


}
