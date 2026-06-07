import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  cartItems: any[] = [];

  constructor(private cartService: CartService) {

  }

  ngOnInit() {

    this.loadCart();

  }

  loadCart() {
    this.cartItems = this.cartService.getCartItems();
  }

  increaseQty(product: any) {
    this.cartService.increaseQty(product._id);
  }

  decreaseQty(product: any) {
    this.cartService.decreaseQty(product._id);
    this.loadCart();
  }

  getSubtotal() {
    return this.cartItems.reduce(
      (total, item) =>
        total +
        (item.offerPrice *
          item.quantity),
      0
    );
  }

  // getDiscount(){
  //   return Math.round(
  //     this.getSubtotal() * 0.10
  //   );
  // }

  getGrandTotal() {
    if (this.getSubtotal() < 500) {
      return this.getSubtotal() + 99; // Apply shipping charge
    }
    return this.getSubtotal();
  }

  getTotalItems(): number {
    return this.cartService.getCartCount();
  }

}
