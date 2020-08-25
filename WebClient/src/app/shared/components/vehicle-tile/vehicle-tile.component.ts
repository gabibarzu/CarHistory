import { Component, OnInit, Input } from '@angular/core';
import { Vehicle } from 'src/app/core/models';

@Component({
  selector: 'app-vehicle-tile',
  templateUrl: './vehicle-tile.component.html',
  styleUrls: ['./vehicle-tile.component.scss']
})
export class VehicleTileComponent implements OnInit {
  @Input() vehicle: Vehicle;

  constructor() { }

  ngOnInit(): void {
  }

}
