import { Component } from '@angular/core';
import { Router } from '@angular/router';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  constructor(private router: Router){

  }
  public sendEmail(e: Event) {
    e.preventDefault();

    emailjs
      .sendForm('service_edi86rv', 'template_dway8kg', e.target as HTMLFormElement, {
        publicKey: 'fccmKogGdVyzolAc-',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          this.router.navigate(['/home']);
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
          this.router.navigate(['/home']);
        },
      );
  }


}
