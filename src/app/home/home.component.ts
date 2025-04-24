import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../servicios/product.service';
import { CartService } from '../servicios/cart.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] 
})
export class HomeComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService, private cartService: CartService) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    alert('Producto agregado al carrito!');
  }
}
