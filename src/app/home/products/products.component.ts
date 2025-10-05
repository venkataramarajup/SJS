import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProducts, ProductsService } from '../../Services/products-info';
import { CommonComponentsComponent } from '../common-components/common-components.component';

@Component({
  selector: 'sjs-products',
  standalone: true,
  imports: [CommonModule, CommonComponentsComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  products: AllProducts[] = [];
    constructor(private productsService: ProductsService) {}
    ngOnInit(): void {
      this.products = this.productsService.getAllProducts();
      console.log(this.products)
    }
}
