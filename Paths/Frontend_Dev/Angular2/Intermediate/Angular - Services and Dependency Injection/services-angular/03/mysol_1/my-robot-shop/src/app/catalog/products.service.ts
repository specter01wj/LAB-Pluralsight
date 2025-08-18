import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from "@shared/product.model";
// import { productsArray } from './products-data';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  // private products: Subject<Product[]> = new Subject();

  constructor(
    private httpClient: HttpClient
  ) {}

  getProducts(): Observable<Product[]> {
    // return this.products;
    return this.httpClient.get<Product[]>('/api/products');
  }

  /* refreshProducts() {
    this.products.next(productsArray);
  } */

}
