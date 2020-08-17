import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vehicle-icon',
  templateUrl: './vehicle-icon.component.html',
  styleUrls: ['./vehicle-icon.component.scss']
})
export class VehicleIconComponent {
  @Input() color: string;

  get colorClass() {
    return 'car-' + this.color;
  }
}
