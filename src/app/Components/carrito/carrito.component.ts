import { Component, OnInit, TemplateRef } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';
import { CartItem } from '../../models/cart.item';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  carroProductos: CartItem[] = [];
  pagoProcesado: boolean = false;
  modalRef: NgbModalRef | undefined;

  constructor(
    private cartService: CartService,
    private productService: ProductService,
    private modalService: NgbModal
  ) { }

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

  procederPago(content: TemplateRef<any>): void {
    if (this.carroProductos.length === 0) {
      alert('No hay nada en el carrito para proceder al pago.');
      return;
    }

    this.pagoProcesado = false;
    this.modalRef = this.modalService.open(content, { backdrop: 'static', keyboard: false });

    setTimeout(() => {
      this.carroProductos.forEach(item => {
        this.productService.actualizarStock(item.product.id, item.cantidad);
      });
      this.pagoProcesado = true;
      this.cartService.limpiarCarrito();
      this.cargarCarro();
      setTimeout(() => {
        this.modalRef?.close();
      }, 5000); // Cierra el modal después de mostrar el mensaje de pago procesado
    }, 5000); // Simula el tiempo de procesamiento del pago
  }
}
