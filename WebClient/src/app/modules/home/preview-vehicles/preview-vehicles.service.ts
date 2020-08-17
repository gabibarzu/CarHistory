import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PreviewVehiclesService {
  readonly BaseURI = 'http://localhost:54277/api';

  constructor(private http: HttpClient) { }

  getPreviewVehicles() {
    return this.http.get(this.BaseURI + '/Vehicles/GetPreviewVehicles');
  }
}
