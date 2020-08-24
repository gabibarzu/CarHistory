import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tile-garage',
  templateUrl: './garage.component.html',
  styleUrls: ['./garage.component.scss']
})
export class GarageTileComponent implements OnInit {
  @Input() vehiclesInGarage: number;
  constructor() { }

  ngOnInit(): void {
  }

}
