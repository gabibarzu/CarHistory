import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '../icon/icon.module';
import { VehicleTileComponent } from '../vehicle-tile';
import { CustomIconsModule } from '../custom-icons/custom-icons.module';

@NgModule({
  declarations: [VehicleTileComponent],
  exports: [VehicleTileComponent],
  imports: [
    CommonModule,
    IconModule,
    CustomIconsModule
  ]
})
export class VehicleTileModule { }
