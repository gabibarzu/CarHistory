import { VehicleType, FuelType } from '../models';

export class Vehicle {
    id: number;
    registrationNumber: string;
    vin: string;
    brand: string;
    model: string;
    type: VehicleType;
    fuel: FuelType;
    color: string;
    isFavorite: boolean;
    added: Date;

    constructor(type: FuelType, brand: string, model: string, fuel: FuelType, color: string, registrationNumber: string, vin: string) {
        this.brand = brand;
        this.model = model;
        this.fuel = fuel;
        this.color = color;
        this.registrationNumber = registrationNumber;
        this.vin = vin;
    }
}
