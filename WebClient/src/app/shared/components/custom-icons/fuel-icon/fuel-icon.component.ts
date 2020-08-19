import { Component, Input, OnInit } from '@angular/core';
import { FuelType } from 'src/app/core/models';

@Component({
  selector: 'app-fuel-icon',
  templateUrl: './fuel-icon.component.html',
  styleUrls: ['./fuel-icon.component.scss']
})
export class FuelIconComponent {
  @Input() type: number;

  get isEco() {
    return this.type == FuelType.Electric || this.type == FuelType.Hybrid;
  }

  get colorClass() {
    switch (this.type) {
      case FuelType.Diesel: {
        return 'gas-diesel';
      }
      case FuelType.Gasoline: {
        return 'gas-gasoline';
      }
      case FuelType.Electric: {
        return 'electric';
      }
      case FuelType.Hybrid: {
        return 'hybrid';
      }
    }
  }

}
