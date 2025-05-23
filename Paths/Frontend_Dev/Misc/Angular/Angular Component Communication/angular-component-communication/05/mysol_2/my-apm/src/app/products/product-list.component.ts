import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { ProductService } from '../service/product.service';

import { IProduct } from '../interface/product';
import { NgModel } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CriteriaComponent } from '../shared/criteria/criteria.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent implements OnInit, AfterViewInit {
	pageTitle: string = 'Product List';
  showImage: boolean;
  includeDetail: boolean = true;
  @ViewChild('filterCriteria') filterComponent: CriteriaComponent;
  parentListFilter: string;

  imageWidth: number = 50;
  imageMargin: number = 2;
  errorMessage: string;

  filteredProducts: IProduct[];
  products: IProduct[];

  constructor(private productService: ProductService) { }


  ngOnInit(): void {
  	this.productService.getProducts().subscribe(
        (products: IProduct[]) => {
            this.products = products;
            this.performFilter(this.parentListFilter);
        },
        (error: any) => this.errorMessage = <any>error
    );
  }

  ngAfterViewInit(): void {
    this.parentListFilter = this.filterComponent.listFilter;
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
