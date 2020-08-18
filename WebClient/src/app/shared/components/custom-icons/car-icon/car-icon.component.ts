import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-car-icon',
  templateUrl: './car-icon.component.html',
  styleUrls: ['./car-icon.component.scss']
})
export class CarIconComponent {
  @Input() color: string;

  get colorClass() {
    return 'car-' + this.color;
  }
}
