import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MotorcycleIconComponent, TruckIconComponent, GarageIconComponent, KeyIconComponent, VehicleIconComponent } from '../custom-icons';

@NgModule({
  declarations: [
    GarageIconComponent,
    KeyIconComponent,
    MotorcycleIconComponent,
    TruckIconComponent,
    VehicleIconComponent],
  exports: [
    GarageIconComponent,
    KeyIconComponent,
    MotorcycleIconComponent,
    TruckIconComponent,
    VehicleIconComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CustomIconsModule { }
