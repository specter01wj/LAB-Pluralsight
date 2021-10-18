import { Component, OnInit } from '@angular/core';

import { Product } from '../../interface/product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Product List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  errorMessage = '';

  _listFilter = '';

  filteredProducts: Product[] = [];
  products: Product[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
