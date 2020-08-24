import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { CustomIconsModule } from 'src/app/shared/components/custom-icons/custom-icons.module';
import { IconModule } from 'src/app/shared/components/icon/icon.module';

import { HomeComponent } from './home.component';
import { AuthenticationComponent } from '../authentication/authentication.component';
import { LoginComponent } from '../authentication/login/login.component';
import { RegistrationComponent } from '../authentication/registration/registration.component';
import { PreviewVehiclesComponent } from './preview-vehicles/preview-vehicles.component';
import { AddVehicleComponent } from './preview-vehicles/add-vehicle/add-vehicle.component';
import { GarageTileComponent } from './preview-vehicles/garage/garage.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    CustomIconsModule,
    IconModule,
    HomeComponent,
    AuthenticationComponent,
    LoginComponent,
    RegistrationComponent,
    PreviewVehiclesComponent,
    AddVehicleComponent,
    GarageTileComponent
  ],
  exports: [
    HomeComponent,
    AuthenticationComponent,
    LoginComponent,
    RegistrationComponent,
    PreviewVehiclesComponent,
    AddVehicleComponent,
    GarageTileComponent
  ]
})
export class HomeModule { }
