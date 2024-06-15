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

  carroProductos: CartItem[] = [];

  constructor(private cartService: CartService, private productService: ProductService) { }

  ngOnInit(): void {
    this.cargarCarro();
  }

  cargarCarro(): void {
    const cart = this.cartService.obtenerCarritoDeCompras();
    this.carroProductos = cart.map(item => {
      const product = this.productService.getProductById(item.productId);
      if (product) {
        return { product, cantidad: item.cantidad };
      } else {
        return { product: { id: -1, nombre: 'Producto no encontrado', precio: 0, descripcion: '', imageUrl: '', stock: 0 }, cantidad: item.cantidad };
      }
    });
  }

  funcionEliminar(productId: number): void {
    const itemIndex = this.carroProductos.findIndex(cartItem => cartItem.product.id === productId);
    if (itemIndex !== -1) {
      this.carroProductos.splice(itemIndex, 1);
      this.cartService.eliminarObjetoCarro(productId);
    }
  }

  procederPago(): void {
    if (this.carroProductos.length === 0) {
      alert('No hay nada en el carrito para proceder al pago.');
      return;
    }

    this.carroProductos.forEach(item => {
      this.productService.actualizarStock(item.product.id, item.cantidad); // Restaurar el stock de cada producto en el carrito
    });
    alert('Pago realizado con éxito');
    this.cartService.limpiarCarrito();
    this.cargarCarro(); // Recargar los productos en el carrito
  }
}
