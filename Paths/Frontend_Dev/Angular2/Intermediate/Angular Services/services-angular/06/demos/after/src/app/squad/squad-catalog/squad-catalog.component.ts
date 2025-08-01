import { Component, Inject, Self, SkipSelf } from '@angular/core';
import { Product } from '@shared/product.model';
import { CartService } from '@core/cart.service';
import { IProductsService, IProductsServiceToken } from '@shared/products-service.interface';
import { Observable } from 'rxjs';
import { EngineersService } from '../engineers.service';

@Component({
  selector: 'bot-catalog',
  templateUrl: './squad-catalog.component.html',
  styleUrls: ['./squad-catalog.component.css'],
  providers: [
    {
      provide: IProductsServiceToken,
      useClass: EngineersService,
    },
  ],
})
export class SquadCatalogComponent {
  squad: Observable<Product[]> = this.engineersService.getProducts();

  constructor(
    private cartService: CartService,
    @Self() @Inject(IProductsServiceToken) private engineersService: IProductsService) { }

  addToCart(engineer: Product) {
    this.cartService.add(engineer);
  }
}
