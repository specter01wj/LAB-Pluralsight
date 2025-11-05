import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CakeComponent } from './components/cake/cake.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, HeaderComponent, CakeComponent]
})
export class AppComponent {
  cakes = [
    { name: 'Original Cheesecake', price: '$32.99', imageFile: '01-cheesecake-original.jpg', featured: false, onSale: true },
    { name: 'Strawberry Cheesecake', price: '$29.99', imageFile: '02-cheesecake-strawberry.jpg', featured: false, onSale: true },
    { name: 'Chocolate Cheesecake', price: '$34.99', imageFile: '03-cheesecake-chocolate.jpg', featured: false, onSale: false },
    { name: 'Birthday Cheesecake', price: '$36.99', imageFile: '04-cheesecake-birthday.jpg', featured: true, onSale: false },
    { name: 'Caramel Cheesecake', price: '$31.99', imageFile: '05-cheesecake-caramel.jpg', featured: true, onSale: true },
    { name: 'Pistachio Cheesecake', price: '$30.99', imageFile: '06-cheesecake-pistachio.jpg', featured: false, onSale: false }
  ];
}