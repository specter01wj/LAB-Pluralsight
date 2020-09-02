import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRouteSnapshot } from '@angular/router';

import { EventsListComponent } from './events/events-list/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { CreateSessionComponent } from './events/create-session/create-session.component';
import { E404Component } from './errors/e404.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { EventsListResolverService } from './events/service/events-list-resolver.service';

// import { UserModule } from './user/user.module';

const routes: Routes = [
	{ path: 'events/new', component: CreateEventComponent, 
			canDeactivate: ['canDeactivateCreateEvent'] },
	{ path: 'events/create-session', component: CreateSessionComponent,
			canDeactivate: ['canDeactivateCreateEvent']}, 
	{ path: 'events', component: EventsListComponent, 
			resolve: {events:EventsListResolverService} },
	{ path: 'events/:id', component: EventDetailsComponent,
	    	canActivate: [EventRouteActivator] },
	{ path: '404', component: E404Component },
	{ path: '', redirectTo: '/events', pathMatch: 'full'},
	// { path: 'user', loadChildren: './user/user.module#UserModule'}
	{ path: 'user', loadChildren: () => import('./user/user.module').then(mod => mod.UserModule)}
	// { path: 'user', loadChildren: () => UserModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
