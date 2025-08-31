import { Injectable } from "@angular/core";


export interface AllProducts {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

@Injectable({
    providedIn: 'root'
})

export class ProductsService {
    private products: AllProducts[] = [
    { id: 1, title: 'SJS Chilly Powder Hot', description: 'Description 1Description 1Description 1Description 1Den 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1Description 1', imageUrl: '../../assets/images/sjs_logo.png' },
    { id: 2, title: 'SJS Chilly Powder Top', description: 'Description 2', imageUrl: '../../assets/images/sjs_logo.png'},
    { id: 3, title: 'SJS Chilly Powder ST', description: 'Description 3 Description 3Description 3Description 3Description 3Description 3Description 3Description 3Description 3Description 3Description 3Description 3Description 3', imageUrl: '../../assets/images/sjs_logo.png'},
    { id: 4, title: 'SJS Chilly Powder Hot-1', description: 'Description 4', imageUrl: '../../assets/images/sjs_logo.png'},
    { id: 5, title: 'SJS Soap', description: 'Description 1', imageUrl: '../../assets/images/sjs_logo.png'},
    { id: 6, title: 'SJS Daniya', description: 'Description 2', imageUrl: '../../assets/images/sjs_logo.png'},
    { id: 7, title: 'SJS Tamerind', description: 'Description 3', imageUrl: '../../assets/images/sjs_logo.png'},
    { id: 8, title: 'SJS Liquid', description: 'Description 4 Description 4Description 4Description 4Description 4Description 4Description 4Description 4Description 4Description 4Description 4Description 4Description 4Description 4Description 4Description 4Description 4', imageUrl: '../../assets/images/sjs_logo.png'},
    // ... more events
  ];

  getAllProducts(): AllProducts[] {
    return this.products;
  }


}