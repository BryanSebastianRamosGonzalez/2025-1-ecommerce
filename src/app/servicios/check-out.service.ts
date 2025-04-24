import { Injectable } from '@angular/core';
export interface datosUsuario{
  nombre:string;
  correo:string;
  telefono:string;
}
export interface checkout{
  nombre:string;
  correo:string;
  telefono:string;
  productos: string[];
}
@Injectable({
  providedIn: 'root'
})
export class CheckOutService {

  constructor() { }
}
