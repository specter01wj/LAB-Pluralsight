import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SiteHeaderComponent } from '@core/site-header/site-header.component';
import { AppRoutingModule } from './app-routing.module';
import { CatalogModule } from '@catalog/catalog.module';
import { HttpClientModule } from '@angular/common/http';
import { CART_SERVICE_TOKEN, CartService } from '@core/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, CatalogModule, HttpClientModule],
  providers: [
    {
      provide: CART_SERVICE_TOKEN,
      useClass: CartService,
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
