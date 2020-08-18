import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MotorcycleIconComponent, TruckIconComponent, GarageIconComponent, KeyIconComponent, CarIconComponent } from '../custom-icons';

@NgModule({
  declarations: [
    GarageIconComponent,
    KeyIconComponent,
    MotorcycleIconComponent,
    TruckIconComponent,
    CarIconComponent],
  exports: [
    GarageIconComponent,
    KeyIconComponent,
    MotorcycleIconComponent,
    TruckIconComponent,
    CarIconComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CustomIconsModule { }
