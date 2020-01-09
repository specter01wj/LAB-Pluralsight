import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
	selector: 'app-product-detail',
  	templateUrl: './product-detail.component.html',
  	styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit, OnDestroy {
	private sub: any;

	productId: number;
    pageTitle: string = 'Product Detail';
    errorMessage: string;
    product: IProduct;

  	constructor(private route: ActivatedRoute, 
  				private _productService: ProductService) { }

	ngOnInit() {
	  	this.sub = this.route.params.subscribe(params => {
	        this.productId = params['id'];

        	this._productService.getProducts()
                .subscribe(products => {
                    console.log(products);
                },
                    error => this.errorMessage = <any>error);
	    });
	}

	ngOnDestroy() {
	    this.sub.unsubscribe();
	}

}
