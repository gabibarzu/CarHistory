import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VehicleType } from '../models';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private httpClient: HttpClient) { }

  read(vehicleType: number) {
    switch (vehicleType) {
      case VehicleType.Motorcycle: {
        return this.httpClient.get("assets/jsons/motorcycle-list.json");
      }
      case VehicleType.Car: {
        return this.httpClient.get("assets/jsons/car-list.json");
      }
      case VehicleType.Truck: {
        return this.httpClient.get("assets/jsons/truck-list.json");
      }
    }

  }
}
