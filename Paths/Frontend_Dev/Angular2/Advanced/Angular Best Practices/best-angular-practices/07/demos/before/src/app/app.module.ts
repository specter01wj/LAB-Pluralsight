import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from "./core/core.module";
import { CatalogModule } from "./catalog/catalog.module";
import { UsersModule } from "./users/users.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    CatalogModule,
    UsersModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
