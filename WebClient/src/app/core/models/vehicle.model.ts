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
}
