import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './home/welcome.component';

const routes: Routes = [
		{ path: 'welcome', component: WelcomeComponent },
		{
	    path: 'products',
	    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
	  },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
