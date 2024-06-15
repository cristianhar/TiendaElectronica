import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { CartItem } from '../../models/cart.item';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  cartItems: CartItem[] = [];

  constructor(private cartService: CartService, private productService: ProductService) { }

  ngOnInit(): void {
    this.cargarCarro();
  }

  cargarCarro(): void {
    const cart = this.cartService.obtenerCarritoDeCompras();
    this.cartItems = cart.map(item => {
      const product = this.productService.getProductById(item.productId);
      if (product) {
        return { product, cantidad: item.cantidad };
      } else {
        return { product: { id: -1, nombre: 'Producto no encontrado', precio: 0, descripcion: '', imageUrl: '', stock: 0 }, cantidad: item.cantidad };
      }
    });
  }

  funcionEliminar(productId: number): void {
    const itemIndex = this.cartItems.findIndex(cartItem => cartItem.product.id === productId);
    if (itemIndex !== -1) {
      const item = this.cartItems[itemIndex];
      this.productService.actualizarStock(productId, item.cantidad); // Restaurar el stock del producto eliminado
      this.cartItems.splice(itemIndex, 1);
    }
    this.cartService.eliminarObjetoCarro(productId);
  }

  procederPago(): void {
    alert('Pago realizado con éxito');
    this.cartService.limpiarCarrito();
    this.cargarCarro(); // Recargar los productos en el carrito
  }
}
