import { Component, OnInit } from '@angular/core';
import { VehicleService } from 'src/app/core/services/vehicle.service';
import { InputVehicleModel, VehicleType, Vehicle } from 'src/app/core/models';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-new-vehicle',
  templateUrl: './add-new-vehicle.component.html',
  styleUrls: ['./add-new-vehicle.component.scss']
})
export class AddNewVehicleComponent implements OnInit {
  addNewVehicleForm = this.fb.group({
    brand: [''],
    model: [''],
    fuel: [''],
    color: [''],
    registrantionNumber: [''],
    vin: ['']
  })

  motorcyclesList: InputVehicleModel[];
  carsList: InputVehicleModel[];
  trucksList: InputVehicleModel[];

  vehiclesList: InputVehicleModel[];
  modelsList: any;
  fuelList: any;
  colorList: any;
  selectedVehicleType: number;

  constructor(private vehicleService: VehicleService, public fb: FormBuilder) { }

  ngOnInit(): void {
    this.vehicleService.read(1).subscribe(
      (res: any) => {
        this.motorcyclesList = res;
      },
      (err: any) => {
        console.log(err);
      });

    this.vehicleService.read(2).subscribe(
      (res: any) => {
        this.carsList = res;
      },
      (err: any) => {
        console.log(err);
      });

    this.vehicleService.read(3).subscribe(
      (res: any) => {
        this.trucksList = res;
      },
      (err: any) => {
        console.log(err);
      });

    this.fuelList = this.vehicleService.getFuelType();
    this.colorList = this.vehicleService.getColor();
  }

  selectVehicleType(type: number) {
    this.selectedVehicleType = type;

    switch (type) {
      case VehicleType.Motorcycle: {
        this.vehiclesList = this.motorcyclesList;
        break;
      }
      case VehicleType.Car: {
        this.vehiclesList = this.carsList;
        break;
      }
      case VehicleType.Truck: {
        this.vehiclesList = this.trucksList;
        break;
      }
    }

    this.addNewVehicleForm.get('brand').setValue(this.vehiclesList[0].brand);
    this.modelsList = this.vehiclesList.find(v => v.brand == this.brand.value).models;
    if (this.selectedVehicleType === VehicleType.Car) {
      this.addNewVehicleForm.get('model').setValue(this.vehiclesList[0].models[0]);
    } else {
      this.addNewVehicleForm.get('model').setValue('');
    }
  }

  get brand() {
    return this.addNewVehicleForm.get('brand');
  }

  get model() {
    return this.addNewVehicleForm.get('model');
  }

  get fuel() {
    return this.addNewVehicleForm.get('fuel');
  }

  get color() {
    return this.addNewVehicleForm.get('color');
  }

  get registrantionNumber() {
    return this.addNewVehicleForm.get('registrantionNumber');
  }

  get vin() {
    return this.addNewVehicleForm.get('vin');
  }

  changeBrand() {
    if (this.selectedVehicleType === VehicleType.Car) {
      this.modelsList = this.vehiclesList.find(v => v.brand == this.brand.value).models;
    } else {
      this.addNewVehicleForm.get('model').setValue('');
    };
  }

  canSubmit() {
    return this.selectedVehicleType && this.brand.value && this.fuel.value && this.color.value && this.registrantionNumber.value && this.vin.value;
  }

  onSubmit() {
    const vehicle = new Vehicle(
      this.selectedVehicleType,
      this.brand.value,
      this.model.value,
      this.fuel.value,
      this.color.value,
      this.registrantionNumber.value,
      this.vin.value);
    alert(vehicle)
  }
}
