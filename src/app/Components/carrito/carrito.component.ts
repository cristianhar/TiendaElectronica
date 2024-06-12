import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model'; // Import the 'Product' type from the appropriate file
import { CartItem } from '../../models/cart.item'; // Import the 'CartItem' type from the appropriate file

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
}) export class CarritoComponent implements OnInit {

  cartItems: CartItem[] = [];

  constructor(private cartService: CartService, private productService: ProductService) { }

  ngOnInit(): void {
    const cart = this.cartService.getCart();
    this.cartItems = cart.map(item => {
      const product = this.productService.getProductById(item.productId);
      if (product) {
        return { product, quantity: item.quantity };
      } else {
        // Maneja el caso en el que el producto no se encuentra (por ejemplo, eliminarlo del carrito)
        return { product: { id: -1, name: 'Producto no encontrado', price: 0, description: '', imageUrl: '', stock: 0 }, quantity: item.quantity };
      }
    });
  }

  removeFromCart(productId: number): void {
    this.cartService.removeFromCart(productId);
    this.ngOnInit(); // Actualiza el carrito
  }

  checkout(): void {
    // Implementa la lógica de procesamiento de pagos aquí
    alert('Pago realizado con éxito');
    this.cartService.clearCart();
    this.ngOnInit(); // Actualiza el carrito
  }
}