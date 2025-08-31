import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProducts, ProductsService } from '../../Services/products-info';

@Component({
  selector: 'sjs-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  products: AllProducts[] = [];
    constructor(private productsService: ProductsService) {}
    ngOnInit(): void {
      this.products = this.productsService.getAllProducts();
    }
}
