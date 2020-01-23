import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavBarComponent } from './nav-bar/nav-bar.component';
// import { ProfileComponent } from './user/profile.component';

import { ToastrService } from './service/toastr.service';

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventsListResolverService
} from './events/index';

// import { EventsListComponent } from './events/events-list/events-list.component';
// import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';
// import { EventDetailsComponent } from './events/event-details/event-details.component';
// import { CreateEventComponent } from './events/create-event/create-event.component';
import { E404Component } from './errors/e404.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    // ProfileComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    E404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
  	EventService, 
    ToastrService, 
    EventRouteActivator,
    EventsListResolverService,
    { 
      provide: 'canDeactivateCreateEvent', 
      useValue: checkDirtyState 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

function checkDirtyState(component:CreateEventComponent) {
  	if (component.isDirty) {
    	return window.confirm('You have not saved this event, do you really want to cancel?');
	  }
  	return true;
}
