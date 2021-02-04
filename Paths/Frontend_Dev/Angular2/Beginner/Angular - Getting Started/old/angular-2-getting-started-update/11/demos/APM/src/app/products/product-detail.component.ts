import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

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
  				private _productService: ProductService,
  				private _location: Location) { }

  	backClicked() {
	    this._location.back();
	}

	ngOnInit() {
	  	this.sub = this.route.params.subscribe(params => {
	        this.productId = params['id'];

        	this._productService.getProducts()
                .subscribe(products => {
                    // console.log(products);
                    for(var i = 0; i <= products.length; i++) {
                    	if(products[i].productId == this.productId) {
                    		this.product = products[i];
                    		break;
                    	}
                    }
                },
                error => this.errorMessage = <any>error);
	    });
	}

	ngOnDestroy() {
	    this.sub.unsubscribe();
	}

}
