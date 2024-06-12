// src/app/components/product-search/product-search.component.ts

import { Component, EventEmitter, Output } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent {
  searchTerm: string = '';
  @Output() searchResults = new EventEmitter<Product[]>();

  constructor(private productService: ProductService) { }

  onSearch(): void {
    const results = this.productService.searchProducts(this.searchTerm);
    this.searchResults.emit(results);
  }
}
