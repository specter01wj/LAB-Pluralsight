import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

export class Vehicle {
  constructor(public id: number, public name: string) {}
}

@Injectable()
export class VehicleService {
	constructor(private http: Http) {

	}

  	getVehicles() {
  		return this.http.get('api/vehicles.json')
  			.map((response: Response) => <Vehicle[]>response.json())
    /*return [
      new Vehicle(1, 'X-Wing Fighter'),
      new Vehicle(2, 'B-Wing Fighter'),
      new Vehicle(3, 'Y-Wing Fighter')
    ];*/
  	}
}
