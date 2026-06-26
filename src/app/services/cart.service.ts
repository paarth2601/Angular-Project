import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: any[] = [];

  constructor() {
    const cart = localStorage.getItem('cart');
    if (cart) {
      this.cartItems = JSON.parse(cart);
    }
  }

  cartUpdated = new Subject<number>();

  getCartItems() {
    return this.cartItems;
  }

  addToCart(product: any) {
    const existingProduct =
      this.cartItems.find(
        item => item._id === product._id
      );
    if (existingProduct) {
      existingProduct.quantity++;
    }
    else {
      this.cartItems.push({
        ...product,
        quantity: 1
      });
    }
    this.saveCart();
  }


  increaseQty(productId: string) {
    const product =
      this.cartItems.find(
        item => item._id === productId
      );
    if (product) {
      product.quantity++;
      this.saveCart();
    }
  }


  decreaseQty(productId: string) {
    const product =
      this.cartItems.find(
        item => item._id === productId
      );
    if (product) {
      if (product.quantity > 1) {
        product.quantity--;
      }
      else {
        this.removeItem(productId);
      }
      this.saveCart();
    }
  }


  removeItem(productId: string) {
    this.cartItems =
      this.cartItems.filter(
        item => item._id !== productId
      );
    this.saveCart();
  }


  saveCart() {
    localStorage.setItem(
      'cart',
      JSON.stringify(this.cartItems)
    );

    this.cartUpdated.next(
      this.getCartCount()
    );
  }


  getCartCount(): number {
    return this.cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
  }
}
