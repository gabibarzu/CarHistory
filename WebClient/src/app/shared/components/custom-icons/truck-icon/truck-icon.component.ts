import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-truck-icon',
  templateUrl: './truck-icon.component.html',
  styleUrls: ['./truck-icon.component.scss']
})
export class TruckIconComponent {
  @Input() color: string;

  get colorClass() {
    return 'truck-' + this.color;
  }
}
