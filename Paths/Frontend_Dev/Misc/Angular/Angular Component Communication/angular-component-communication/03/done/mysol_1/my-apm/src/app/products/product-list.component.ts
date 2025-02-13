import { Component, OnInit } from '@angular/core';

import { ProductService } from '../service/product.service';

import { IProduct } from '../interface/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent implements OnInit {
	pageTitle: string = 'Product List';
  // listFilter: string;
  showImage: boolean;

  imageWidth: number = 50;
  imageMargin: number = 2;
  errorMessage: string;

  private _listFilter: string;
  get listFilter(): string {
      return this._listFilter;
  }

  set listFilter(value: string) {
      this._listFilter = value;
      this.performFilter(this.listFilter);
  }

  filteredProducts: IProduct[];
  products: IProduct[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  	this.productService.getProducts().subscribe(
        (products: IProduct[]) => {
            this.products = products;
            this.performFilter(this.listFilter);
        },
        (error: any) => this.errorMessage = <any>error
    );
  }

  onFilterChange(filter: string): void {
    this.listFilter = filter;
    this.performFilter(this.listFilter);
  }

  toggleImage(): void {
      this.showImage = !this.showImage;
  }

  performFilter(filterBy?: string): void {
      if (filterBy) {
          this.filteredProducts = this.products.filter((product: IProduct) =>
              product.productName.toLocaleLowerCase().indexOf(filterBy.toLocaleLowerCase()) !== -1);
      } else {
          this.filteredProducts = this.products;
      }
  }

}
