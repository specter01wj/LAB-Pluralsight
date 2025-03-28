import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ProductService } from '../service/product.service';

import { IProduct } from '../interface/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent implements OnInit, AfterViewInit {
	pageTitle: string = 'Product List';
  listFilter: string;
  filterName: string;
  showImage: boolean;

  imageWidth: number = 50;
  imageMargin: number = 2;
  errorMessage: string;

  @ViewChild('filterElement') filterElementRef: ElementRef;
  // @ViewChildren('filterElement, nameElement') inputElementRefs: QueryList<ElementRef>;
  // @ViewChildren(NgModel) inputElementRefs: QueryList<ElementRef>;
  @ViewChildren(NgModel) filterInput: NgModel;

  /*private _listFilter: string;
  get listFilter(): string {
      return this._listFilter;
  }

  set listFilter(value: string) {
      this._listFilter = value;
      this.performFilter(this.listFilter);
  }*/

  filteredProducts: IProduct[];
  products: IProduct[];

  constructor(private productService: ProductService) { 
  }

  ngAfterViewInit(): void {
    this.filterInput._results[0].valueChanges.subscribe(
      () => this.performFilter(this.listFilter)
    );
    this.filterElementRef.nativeElement.focus();
    console.log(this.filterInput);
  }

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
