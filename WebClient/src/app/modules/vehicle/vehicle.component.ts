import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vehicle, FuelType } from 'src/app/core/models';
import { VehicleService } from 'src/app/core/services/vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit, OnDestroy {
  id: number;
  private sub: any;

  vehicle: Vehicle;
  isLoaded: boolean = false;

  constructor(private route: ActivatedRoute, private service: VehicleService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });

    if (this.id) {
      this.service.getVehicle(this.id).subscribe(
        (res: any) => {
          this.vehicle = res;
          this.isLoaded = true;
        },
        (err: any) => {
          this.isLoaded = true;
          console.log(err);
        });
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  get vehicleFuelType() {
    return FuelType[this.vehicle.fuel];
  }
}