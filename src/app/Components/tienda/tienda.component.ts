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
  products: Product[] = [];
  filteredProducts: Product[] = [];

  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products; // Inicialmente muestra todos los productos
  }

  onSearchResults(results: Product[]): void {
    this.filteredProducts = results;
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product.id, 1); // Asumiendo que la cantidad predeterminada es 1
    alert('Producto agregado al carrito');
  }
}
