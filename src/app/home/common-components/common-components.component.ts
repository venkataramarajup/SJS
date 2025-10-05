import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AllProducts } from '../../Services/products-info';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sjs-common-components',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './common-components.component.html',
  styleUrl: './common-components.component.scss'
})
export class CommonComponentsComponent implements OnInit, OnChanges{
  @Input() productseventsData: any;
  @Input() isFromProducts: boolean = false;
  @Input() isFromEvents: boolean = false;
  constructor() {}

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    // this.productseventsData = changes['productseventsData'].currentValue[0];
    console.log('CommonComponentsComponent - ngOnChanges - productseventsData:', this.productseventsData);
  }
}
