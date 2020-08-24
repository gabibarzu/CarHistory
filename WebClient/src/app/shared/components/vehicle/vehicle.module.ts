import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '../icon/icon.module';
import { VehicleComponent } from '../vehicle';

@NgModule({
  declarations: [VehicleComponent],
  exports: [VehicleComponent],
  imports: [
    CommonModule,
    IconModule
  ]
})
export class VehicleModule { }
