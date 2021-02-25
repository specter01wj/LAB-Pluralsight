import { Component, OnInit } from '@angular/core';

import { Product } from '../../interface/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.less']
})
export class ProductDetailComponent implements OnInit {
	pageTitle: string = 'Product Detail';
  product: Product;

  constructor() { }

  ngOnInit(): void {
  }

}
