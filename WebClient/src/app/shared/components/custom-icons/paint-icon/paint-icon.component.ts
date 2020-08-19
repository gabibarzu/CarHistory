import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-paint-icon',
  templateUrl: './paint-icon.component.html',
  styleUrls: ['./paint-icon.component.scss']
})
export class PaintIconComponent {
  @Input() color: string;

  get colorClass() {
    return 'paint-' + this.color;
  }
}
