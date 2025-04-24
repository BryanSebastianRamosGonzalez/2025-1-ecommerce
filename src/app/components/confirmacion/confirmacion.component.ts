import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-confirmacion',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './confirmacion.component.html',
  styleUrl: './confirmacion.component.css'
})
export class ConfirmacionComponent {
  cartItems: any[] = [];
  user: any = {};

  ngOnInit() {
    this.cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    this.user = JSON.parse(localStorage.getItem('userDetails') || '{}');
  }
  clearBuyer(): void {
    localStorage.removeItem('userDetails'); // Elimina los datos del comprador del localStorage
    this.user = {}; // Limpia el objeto `user` en el componente
    alert('Datos del comprador eliminados.');
  }
}
