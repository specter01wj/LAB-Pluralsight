import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';

import { ProductDetailGuard } from './products/product-detail/product-detail.guard';

const routes: Routes = [
		{ path: 'products', component: ProductsComponent },
    { path: 'products/:id', canActivate: [ProductDetailGuard], component: ProductDetailComponent },
    { path: 'welcome', component: WelcomeComponent },
















    
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
