import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { Vehicle, VehicleService } from './vehicle.service';

@Component({
  selector: 'story-vehicle',
  templateUrl: './vehicle.component.html'
})
export class VehicleComponent implements OnInit {
  @Input() vehicle: Vehicle;

  private id: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private vehicleService: VehicleService
  ) {}

  ngOnInit() {
    if (!this.vehicle) {
      this.route.params
        .pipe(
          map(params => params['id']),
          tap(id => (this.id = +id))
        )
        .subscribe(id => this.getVehicle());
    }
  }

  private getVehicle() {
    this.vehicleService
      .getVehicle(this.id)
      .subscribe((vehicle: Vehicle) => this.setEditVehicle(vehicle));
  }

  private gotoVehicles() {
    let route = ['/vehicles'];
    this.router.navigate(route);
  }

  private setEditVehicle(vehicle: Vehicle) {
    if (vehicle) {
      this.vehicle = vehicle;
    } else {
      this.gotoVehicles();
    }
  }
}
