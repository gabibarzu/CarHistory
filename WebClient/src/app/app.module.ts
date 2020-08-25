import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CustomIconsModule } from './shared/components/custom-icons/custom-icons.module';
import { NavigationModule } from './shared/components/navigation/navigation.module';
import { IconModule } from './shared/components/icon/icon.module';
import { VehicleTileModule } from './shared/components/vehicle-tile/vehicle-tile.module';
import { PageNotFoundModule } from './shared/components/page-not-found/page-not-found.module';

import { AuthInterceptor } from './core/interceptors/auth.interceptor';

import { AuthenticationService } from './modules/authentication/authentication.service';
import { VehicleService } from './core/services/vehicle.service';

import { HomeComponent } from './modules/home/home.component';
import { PreviewVehiclesComponent } from './modules/home/preview-vehicles/preview-vehicles.component';
import { AddVehicleTileComponent } from './modules/home/preview-vehicles/add-vehicle-tile/add-vehicle-tile.component';
import { GarageTileComponent } from './modules/home/preview-vehicles/garage-tile/garage-tile.component';

import { AuthenticationComponent } from './modules/authentication/authentication.component';
import { LoginComponent } from './modules/authentication/login/login.component';
import { RegistrationComponent } from './modules/authentication/registration/registration.component';

import { AddNewVehicleComponent } from './modules/add-new-vehicle/add-new-vehicle.component';

import { GarageComponent } from './modules/garage/garage.component';
import { VehicleTileComponent } from './shared/components/vehicle-tile';
import { VehicleComponent } from './modules/vehicle/vehicle.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PreviewVehiclesComponent,
    AddVehicleTileComponent,
    GarageTileComponent,
    AuthenticationComponent,
    LoginComponent,
    RegistrationComponent,
    AddNewVehicleComponent,
    GarageComponent,
    VehicleTileComponent,
    VehicleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      progressBar: true
    }),
    FormsModule,
    CustomIconsModule,
    NavigationModule,
    IconModule,
    PageNotFoundModule
  ],
  providers: [
    AuthenticationService, {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    VehicleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
