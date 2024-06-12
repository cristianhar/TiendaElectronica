// src/app/services/product.service.ts

import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Producto 1', price: 100, description: 'Descripción del Producto 1', imageUrl: 'url1', stock: 10 },
    { id: 2, name: 'Producto 2', price: 200, description: 'Descripción del Producto 2', imageUrl: 'url2', stock: 5 },
    // Agrega más productos según sea necesario
  ];

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }

  searchProducts(query: string): Product[] {
    return this.products.filter(product => product.name.toLowerCase().includes(query.toLowerCase()));
  }
}
