import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VehicleType, Vehicle } from '../models';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  readonly BaseURI = 'http://localhost:54277/api/Vehicles';

  private readonly fuelList = [
    { id: 1, value: "Gasoline" },
    { id: 2, value: "Diesel" },
    { id: 3, value: "Hybrid" },
    { id: 4, value: "Electric" }
  ];

  private readonly colorList = ["pink", "purple", "blue", "green", "orange", "yellow", "red", "brown", "gray", "black", "white", "other"];

  constructor(private http: HttpClient) { }

  getPreviewVehicles() {
    return this.http.get(this.BaseURI + '/GetPreviewVehicles');
  }

  getVehiclesList(vehicleType: number) {
    switch (vehicleType) {
      case VehicleType.Motorcycle: {
        return this.http.get("assets/jsons/motorcycle-list.json");
      }
      case VehicleType.Car: {
        return this.http.get("assets/jsons/car-list.json");
      }
      case VehicleType.Truck: {
        return this.http.get("assets/jsons/truck-list.json");
      }
    }
  }

  getFuelTypesList() {
    return this.fuelList;
  }

  getColorsList() {
    return this.colorList;
  }

  saveVehicle(vehicle: Vehicle) {
    return this.http.post<Vehicle>(this.BaseURI, vehicle);
  }

  getVehicles() {
    return this.http.get<Vehicle[]>(this.BaseURI);
  }
}
