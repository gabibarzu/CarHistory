import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VehicleType } from '../models';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private fuelList = [
    { id: 1, value: "Gasoline" },
    { id: 2, value: "Diesel" },
    { id: 3, value: "Hybrid" },
    { id: 4, value: "Electric" }
  ];
  private colorList = ["pink", "purple", "blue", "green", "orange", "yellow", "red", "brown", "gray", "black", "white", "other"];

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

  getFuelType() {
    return this.fuelList;
  }

  getColor() {
    return this.colorList;
  }
}
