import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-motorcycle-icon',
  templateUrl: './motorcycle-icon.component.html',
  styleUrls: ['./motorcycle-icon.component.scss']
})
export class MotorcycleIconComponent {
  @Input() color: string;

  get colorClass() {
    return 'motorcycle-' + this.color;
  }
}
