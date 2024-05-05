import { Component, Input } from '@angular/core';
import { Product } from '../../model/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  @Input() product!: Product;


  getImageUrl(product: Product) {
    if (!product) return '';
    return '/assets/images/robot-parts/' + product.imageName;
  }



}
