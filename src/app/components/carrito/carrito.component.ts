import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { CartService } from '../../servicios/cart.service';
import { productos } from '../../servicios/product.service';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule, RouterModule,RouterLink],
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  cartItems: productos[] = [];

  constructor(private cartService: CartService) { }
  ngOnInit(){
    this.cartItems = this.cartService.getCartItems();
  }
  removeFromCart(item: any) {
    this.cartService.removeFromCart(item);
    this.cartItems = this.cartService.getCartItems();
  }
  calcularTotal(): number {
    return this.cartItems.reduce((total, product) => total + (product.precio), 0);
  }
}