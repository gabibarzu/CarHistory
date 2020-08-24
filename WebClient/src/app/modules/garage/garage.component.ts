import { Component, OnInit } from '@angular/core';
import { VehicleService } from 'src/app/core/services/vehicle.service';

@Component({
  selector: 'app-garage',
  templateUrl: './garage.component.html',
  styleUrls: ['./garage.component.scss']
})
export class GarageComponent implements OnInit {

  vehicles: any;

  constructor(private service: VehicleService) { }

  ngOnInit(): void {
    this.service.getVehicles().subscribe(
      (res: any) => {
        this.vehicles = res;
      },
      (err: any) => {
        console.log(err);
      });
  }

}
