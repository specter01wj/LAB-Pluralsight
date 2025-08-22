import { Component, OnInit } from '@angular/core';
import { CoffeeApiService } from '../../services/coffee-api.service';
import { Coffee } from '../../types/coffee';
import { Observable, Subject, debounceTime, delay, distinctUntilChanged, map, of, switchMap, tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-coffee-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [CoffeeApiService],
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.scss'],
})

export class CoffeeListComponent implements OnInit {
  coffees$: Observable<Coffee[]> = of([]);
  coffeeToAdd: Partial<Coffee> = {};
  searchCoffee$: Observable<Coffee | undefined> = of(undefined);
  private coffeeSearchId$ = new Subject<number>();


  constructor(public restApi: CoffeeApiService) {}

  ngOnInit() {
    this.coffees$ = this.restApi.getCoffees();
    this.searchCoffee$ = this.coffeeSearchId$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(coffeeId => this.restApi.getCoffee(coffeeId))
    );
  }

  deleteCoffee(id: number) {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.restApi.deleteCoffee(id).subscribe((data) => {
        // This test API doesn't actually delete the coffee - so we simulate that here.
        this.coffees$ = this.coffees$.pipe(map(coffees => coffees.filter(coffee => coffee.id !== id)));
      });
    }
  }

  addCoffee(coffee: Partial<Coffee>) {
    this.restApi.createCoffee(coffee).subscribe((newCoffee) => {
      this.coffees$ = this.coffees$.pipe(
        map(coffees => coffees.concat(newCoffee)),
        tap(() => this.coffeeToAdd = {})
      ) 
    });
  }

  requestCoffeeBlob(imageUrl: string) {
    this.restApi.getCoffeeImageBlob(imageUrl).subscribe(imageBlob => {
      console.log('Image blob: ', imageBlob);
    });
  }

  requestCoffeeBuffer(imageUrl: string) {
    this.restApi.getCoffeeImageBuffer(imageUrl).subscribe(buffer => {
      console.log('Image buffer: ', buffer);
    });
  }

  requestCoffeeAsText(id: number) {
    this.restApi.getCoffeeAsText(id).subscribe(coffeeText => {
      console.log('Coffee text: ', coffeeText);
    });
  }

  requestCoffeeHostIP() {
    this.restApi.getCoffeeHostIPAddress();
  }

  cancelRequestForCoffees() {
    this.restApi.cancel();
  }

  searchForCoffeeById(event: Event) {
    const input = (event as InputEvent).target as HTMLInputElement;
    this.coffeeSearchId$.next(input.value ? parseInt(input.value) : -1);
  }

  getCoffeeChunks() {
    this.coffees$ = this.restApi.getCoffeeChunks();
  }

  getCoffeeChunksSync() {
    this.coffees$ = this.restApi.getCoffeeChunksSync();
  }

  editCoffee(toUpdate: Partial<Coffee>) {
    this.restApi.updateCoffee(toUpdate).subscribe((updatedCoffee) => {
      this.coffees$ = this.coffees$.pipe(
        map(coffees => coffees.filter(coffee => coffee.id !== toUpdate.id).concat({ ...toUpdate, ...updatedCoffee }))
      ) 
    });
  }
}