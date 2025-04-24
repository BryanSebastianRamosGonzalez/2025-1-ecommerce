import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-checkout',
  imports: [FormsModule, RouterModule, RouterLink],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  user = {name: '', email: '', phone: '', address: ''};

  submitForm(){
    localStorage.setItem('userDetails', JSON.stringify(this.user));
    alert('Datos guardados correctamente!');
  }
}
