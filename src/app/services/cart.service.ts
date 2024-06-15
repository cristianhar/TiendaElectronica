import { Injectable } from '@angular/core';

interface CartItem {
  productId: number;
  cantidad: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: CartItem[] = [];

  constructor() { }

  agregarACarrito(productId: number, cantidad: number): void {
    const item = this.cart.find(i => i.productId === productId);
    if (item) {
      item.cantidad += cantidad;
    } else {
      this.cart.push({ productId, cantidad });
    }
  }

  obtenerCarritoDeCompras(): CartItem[] {
    return this.cart;
  }

  eliminarObjetoCarro(productId: number): void {
    this.cart = this.cart.filter(item => item.productId !== productId);
  }

  limpiarCarrito(): void {
    this.cart = [];
  }
}
