import { Component, OnInit } from '@angular/core';

import { Product } from '../model/product';

import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
	pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;

  // listFilter: string = 'cart';
  private _listFilter: string = '';

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.performFilter(value);
  }

  filteredProducts: Product[] = [];
  products: Product[] = [];
	
  /*products: Product[] = [
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2019",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "assets/images/garden_cart.png"
    },
    {
      "productId": 5,
      "productName": "Hammer",
      "productCode": "TBX-0048",
      "releaseDate": "May 21, 2019",
      "description": "Curved claw steel hammer",
      "price": 8.9,
      "starRating": 4.8,
      "imageUrl": "assets/images/hammer.png"
    }
  ];*/

  constructor(private productService: ProductService) { }

  performFilter(filterBy: string): Product[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: Product) => 
      product.productName.toLocaleLowerCase().includes(filterBy));
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    // this.listFilter = 'cart';
    this.filteredProducts = this.products;
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }

}
