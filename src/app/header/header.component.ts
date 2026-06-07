import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cartCount: number = 0;
  menuOpen = false;

  constructor(private cartService: CartService) {

  }


  ngOnInit() {
    this.loadCartCount();

    this.cartService.cartUpdated.subscribe(count => {
        this.cartCount = count;
      });
  }

  loadCartCount() {

    this.cartCount =
      this.cartService.getCartCount();

  }


  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }


}
