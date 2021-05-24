import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
      path: '',
      component: ShellComponent,
      children: [
          { path: 'welcome', component: WelcomeComponent },
          {
              path: 'products',
              // canActivate: [AuthGuard],
              loadChildren: './products/product.module#ProductModule'








              
          },
          { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
