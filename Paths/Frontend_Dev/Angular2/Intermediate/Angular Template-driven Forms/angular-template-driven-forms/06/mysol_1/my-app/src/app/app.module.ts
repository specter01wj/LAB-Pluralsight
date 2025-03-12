import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { RestrictedWordsValidator } from './validators/restricted-words-validator.directive';
import { InMemoryContactsApi } from './contacts/in-memory-contacts.service';
import { AppComponent } from './app.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { DateValueAccessorDirective } from './date-value-accessor/date-value-accessor.directive';
import { ProfileIconSelectorComponent } from './profile-icon-selector/profile-icon-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    EditContactComponent,
    ContactListComponent,
    DateValueAccessorDirective,
    ProfileIconSelectorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RestrictedWordsValidator,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(InMemoryContactsApi, { delay: 0 })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
