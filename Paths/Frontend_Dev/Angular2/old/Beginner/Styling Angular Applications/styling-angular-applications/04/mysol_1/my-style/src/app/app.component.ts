import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-style';

  pills = [
      { 
          label: 'HTML'
      },
      { 
          label: 'CSS'
      },
      { 
          label: 'SASS'
      }
  ];

}
