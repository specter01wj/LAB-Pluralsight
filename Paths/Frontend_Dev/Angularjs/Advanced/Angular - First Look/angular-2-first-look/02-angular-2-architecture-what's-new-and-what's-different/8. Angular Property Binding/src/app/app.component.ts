// our root app component
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})

export class AppComponent {
  imagePath = 'assets/angular.png';
  link = 'http://angular.io';
  story = 'The Empire Strikes Back';
  title = 'Angular Property Binding';
}
