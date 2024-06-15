import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  productos: Product[] = [];
  filtrarProductos: Product[] = [];

  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    this.productos = this.productService.traerProductos();
    this.filtrarProductos = this.productos;
  }

  funcionBuscarProducto(results: Product[]): void {
    this.filtrarProductos = results;
  }

  funcionAgregarCarrito(product: Product): void {
    if (product.stock > 0) {
      this.cartService.agregarACarrito(product.id, 1);
      this.productService.actualizarStock(product.id, 1); // Aquí corregimos para restar 1 al stock
      alert('Producto agregado al carrito');
    } else {
      alert('No hay suficiente stock disponible');
    }
  }
}
