import { Injectable } from '@angular/core';
import { productos } from './product.service';
export interface items {
  product: productos;
  cantidad: number;
  totalPrice: number;
  subtotal: number;
}
@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartKey = 'cart';

  constructor() {}

  addToCart(product: productos): void {
    const cart = this.getCartItems();
    cart.push(product);
    localStorage.setItem(this.cartKey, JSON.stringify(cart));
  }

  getCartItems(): productos[] {
    return JSON.parse(localStorage.getItem(this.cartKey) || '[]');
  }

  removeFromCart(product: productos): void {
    let cart = this.getCartItems();
    cart = cart.filter((item) => item.id !== product.id);
    localStorage.setItem(this.cartKey, JSON.stringify(cart));
  }
}
