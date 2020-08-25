import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-garage-tile',
  templateUrl: './garage-tile.component.html',
  styleUrls: ['./garage-tile.component.scss']
})
export class GarageTileComponent implements OnInit {
  @Input() vehiclesInGarage: number;
  constructor() { }

  ngOnInit(): void {
  }

}
