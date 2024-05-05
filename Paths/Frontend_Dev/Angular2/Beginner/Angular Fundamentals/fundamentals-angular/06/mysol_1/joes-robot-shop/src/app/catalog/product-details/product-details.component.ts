import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../model/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  @Input() product!: Product;
  @Output() buy = new EventEmitter();

  getImageUrl(product: Product) {
    if (!product) return '';






    return '/assets/images/robot-parts/' + product.imageName;
  }

  buyButtonClicked(product: Product) {
    this.buy.emit(product);
  }

}
