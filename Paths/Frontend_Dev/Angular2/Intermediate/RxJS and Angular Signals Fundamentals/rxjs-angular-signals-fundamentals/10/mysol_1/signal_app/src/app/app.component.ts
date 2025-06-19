import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

export interface Product {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'signal_app';

  quantity = signal<number>(1);

  qtyAvail = signal<number[]>([1,2,3,4,5,6]);

  selectedProduct = signal<Product>({
    id: 5,
    name: "Hammer",
    price: 25
  });

  constructor() {
    console.log('In constructor: ' + this.quantity());
  }

  onQuantitySelected(qty: number) {

  }

}
