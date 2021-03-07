import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  pageTitle = 'Acme Product Management';


  constructor(private router: Router) { }


  get isLoggedIn(): boolean {
    return true;
  }


  logOut(): void {
    this.router.navigate(['/welcome']);
  }


}
