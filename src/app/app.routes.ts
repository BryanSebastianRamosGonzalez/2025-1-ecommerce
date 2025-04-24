import { Routes } from '@angular/router';
import { CarritoComponent } from './components/carrito/carrito.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ConfirmacionComponent } from './components/confirmacion/confirmacion.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:'carrito', component: CarritoComponent},
    {path: 'datos', component: CheckoutComponent},
    {path:'home', component: HomeComponent},
    {path: 'confirma', component: ConfirmacionComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: '**', redirectTo: '/home'},
    
    


    
];
