import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

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


}
