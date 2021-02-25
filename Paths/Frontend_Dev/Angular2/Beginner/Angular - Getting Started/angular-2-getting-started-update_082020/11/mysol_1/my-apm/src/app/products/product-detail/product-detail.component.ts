import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.less']
})
export class ProductDetailComponent implements OnInit {
	pageTitle: string = 'Product Detail';
  product: IProduct;

  constructor() { }

  ngOnInit(): void {
  }

}
