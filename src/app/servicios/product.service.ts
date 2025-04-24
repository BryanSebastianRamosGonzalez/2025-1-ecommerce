import { Injectable } from '@angular/core';
export interface productos{
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  img: string;
}
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  Productos : productos[]=[
    {
        id: 1,
        nombre: 'Filtro de aceite Bosch',
        descripcion: 'Filtro de alta calidad para motores de gasolina.',
        precio: 150,
        img: '/assets/bosch.jpg'
    },
    {
        id: 2,
        nombre: 'Filtro de aceite Mann-Filter',
        descripcion: 'Filtro diseñado para un rendimiento óptimo en motores diésel.',
        precio: 200,
        img: '/assets/mann-filter.jpg'
    },
    {
        id: 3,
        nombre: 'Filtro de aceite K&N',
        descripcion: 'Filtro reutilizable con alto flujo para vehículos deportivos.',
        precio: 300,
        img: '/assets/k&n.jpg'
    },
    {
        id: 4,
        nombre: 'Filtro de aceite Fram',
        descripcion: 'Filtro económico para uso general en automóviles.',
        precio: 100,
        img: '/assets/fram.webp'
    },
    {
        id: 5,
        nombre: 'Filtro de aceite AC Delco',
        descripcion: 'Filtro confiable para motores de alto rendimiento.',
        precio: 180,
        img: '/assets/delco.webp'
    }]
  constructor() { }
  getProducts(): productos[] {
    return this.Productos;
  }
}
