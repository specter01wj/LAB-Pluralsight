import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IProduct } from './product';

@Component({
	selector: 'app-product-detail',
  	templateUrl: './product-detail.component.html',
  	styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit, OnDestroy {
	productId: number;
	private sub: any;
    pageTitle: string = 'Product Detail';
    product: IProduct;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  	this.sub = this.route.params.subscribe(params => {
       this.productId = params['productId']; // (+) converts string 'id' to a number

       // In a real app: dispatch action to load the details here.
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
