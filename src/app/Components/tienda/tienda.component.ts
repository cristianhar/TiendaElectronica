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

    // Inicializar cantidadToAdd para cada producto
    this.filtrarProductos.forEach(product => {
      product.cantidadToAdd = 1; // Valor predeterminado de cantidad a agregar
    });
  }

  funcionBuscarProducto(results: Product[]): void {
    this.filtrarProductos = results;
  }

  funcionAgregarCarrito(product: Product, cantidad: number): void {
    if (product.stock >= cantidad) {
      this.cartService.agregarACarrito(product.id, cantidad);
      alert('Producto agregado al carrito');
    } else {
      alert('No hay suficiente stock disponible');
    }
  }
}
