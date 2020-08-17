import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-garage',
  templateUrl: './garage.component.html',
  styleUrls: ['./garage.component.scss']
})
export class GarageComponent implements OnInit {
  @Input() vehiclesInGarage: number;
  constructor() { }

  ngOnInit(): void {
  }

}
