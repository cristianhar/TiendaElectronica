import { Injectable } from '@angular/core';

interface CartItem {
  productId: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: CartItem[] = [];

  constructor() { }

  addToCart(productId: number, quantity: number): void {
    const item = this.cart.find(i => i.productId === productId);
    if (item) {
      item.quantity += quantity;
    } else {
      this.cart.push({ productId, quantity });
    }
  }

  getCart(): CartItem[] {
    return this.cart;
  }

  removeFromCart(productId: number): void {
    this.cart = this.cart.filter(item => item.productId !== productId);
  }

  clearCart(): void {
    this.cart = [];
  }
}
