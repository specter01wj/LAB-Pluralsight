import { Component, signal } from '@angular/core';
import { CoffeeListComponent } from './components/coffee-list/coffee-list.component';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CoffeeListComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('my-coffee-palooza');
}
