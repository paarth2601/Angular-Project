import { Component } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contactData = {
    name: '',
    email: '',
    message: ''
  };
  messageSent: boolean = false;

  constructor(private contactService: ContactService) {

  }


  openWhatsapp() {

    const message =
      encodeURIComponent(
        'Hello, I would like to know more about your products.'
      );

    window.open(
      `https://wa.me/917889505059?text=${message}`,
      '_blank'
    );

  }


  submitForm() {
    this.contactService.sendMessage(this.contactData).subscribe({
        next: () => {
          // alert(
          //   'Message sent successfully'
          // );
          this.messageSent = true;
          this.contactData = { name: '', email: '', message: '' };
        },
        error: err => {
          console.log(err);
        }
      });

  }

}
