import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MotorcycleIconComponent,
  TruckIconComponent,
  GarageIconComponent,
  KeyIconComponent,
  CarIconComponent,
  FuelIconComponent,
  PaintIconComponent
} from '../custom-icons';

@NgModule({
  declarations: [
    GarageIconComponent,
    KeyIconComponent,
    MotorcycleIconComponent,
    TruckIconComponent,
    CarIconComponent,
    FuelIconComponent,
    PaintIconComponent],
  exports: [
    GarageIconComponent,
    KeyIconComponent,
    MotorcycleIconComponent,
    TruckIconComponent,
    CarIconComponent,
    FuelIconComponent,
    PaintIconComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CustomIconsModule { }
