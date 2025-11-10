import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { twMerge } from 'tailwind-merge'

@Component({
  selector: 'app-cake',
  imports: [CommonModule],
  templateUrl: './cake.html',
  styleUrl: './cake.scss',
})
export class Cake {
  @Input() cake!: {
    name: string;
    price: string;
    imageFile: string;
    featured: boolean;
    onSale: boolean;
  };

  baseStyles: string = "p-4 w-full mx-auto relative border-2 border-gray-200 bg-white"

  get featuredStyles(): string {
    return this.cake.featured ? "border-4 border-green-500": ""
  }

  get saleStyles(): string {
    return this.cake.onSale ? "border-4 border-blue-500": ""
  }

  get combinedStyles(): string {
    return twMerge(this.baseStyles, this.saleStyles, this.featuredStyles)
  }
}
