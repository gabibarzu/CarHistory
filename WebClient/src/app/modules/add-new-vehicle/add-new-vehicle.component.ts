import { Component, OnInit } from '@angular/core';
import { VehicleService } from 'src/app/core/services/vehicle.service';
import { VehicleModel } from 'src/app/core/models';

@Component({
  selector: 'app-add-new-vehicle',
  templateUrl: './add-new-vehicle.component.html',
  styleUrls: ['./add-new-vehicle.component.scss']
})
export class AddNewVehicleComponent implements OnInit {
  vehiclesList: VehicleModel[];
  selectedVehicleType: number;

  constructor(private vehicleService: VehicleService) { }

  ngOnInit(): void {
  }

  selectVehicleType(type: number) {
    this.selectedVehicleType = type;

    this.vehicleService.read(type).subscribe(
      (res: any) => {
        this.vehiclesList = res;
        console.log(this.vehiclesList);
      },
      (err: any) => {
        console.log(err);
      });
  }
}
