import { Component, OnInit, TemplateRef } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  productos: Product[] = [];
  filtrarProductos: Product[] = [];
  selectedProduct: Product | null = null;
  selectedQuantity: number = 1;

  constructor(private productService: ProductService, private cartService: CartService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.productos = this.productService.traerProductos();
    this.filtrarProductos = this.productos;

    this.filtrarProductos.forEach(product => {
      product.cantidadToAdd = 1;
    });
  }

  funcionBuscarProducto(results: Product[]): void {
    this.filtrarProductos = results;
  }

  funcionAgregarCarrito(product: Product, cantidad: number, content: TemplateRef<any>, stockContent: TemplateRef<any>): void {
    if (product.stock >= cantidad) {
      this.cartService.agregarACarrito(product.id, cantidad);
      this.selectedProduct = product;
      this.selectedQuantity = cantidad;
      this.modalService.open(content);
      product.cantidadToAdd = 1;
    } else {
      this.selectedProduct = product;
      this.modalService.open(stockContent);
    }
  }
}
