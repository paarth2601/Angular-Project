import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products: any[] = [];
  filteredProducts: any[] = [];
  selectedCategory = 'All Products';
  cartItems: { [key: string]: number } = {};

  categories = [
    'All Products',
    'Walnuts',
    'Almonds',
    'Mamra Badam',
    'Jammu Rajma',
    'Kashmiri Kesar'
  ];

  constructor(private productService: ProductService, private cartService: CartService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadProducts();
    this.loadCartItems();
  }


  loadProducts(): void {
    this.productService.getProducts().subscribe({
      next: (res: any) => {
        this.products = res;
        this.filteredProducts = res;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  filterProducts(category: string): void {
    this.selectedCategory = category;
    if (category === 'All Products') {
      this.filteredProducts = this.products;
      return;
    }
    this.filteredProducts = this.products.filter(
      product => product.category === category
    );
  }


  // CART CODE

  addToCart(product: any) {
    this.cartService.addToCart(product);
    this.loadCartItems();
  }

  increaseQty(product: any) {
    this.cartService.increaseQty(product._id);
    this.loadCartItems();
  }

  decreaseQty(product: any) {
    this.cartService.decreaseQty(product._id);
    this.loadCartItems();
  }


  loadCartItems() {
    const cart =
      this.cartService.getCartItems();
    this.cartItems = {};
    cart.forEach(item => {
      this.cartItems[item._id] =
        item.quantity;
    });
  }


}
