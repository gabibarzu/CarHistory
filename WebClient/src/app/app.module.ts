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

import { AuthenticationService } from './modules/authentication/authentication.service';

import { AuthInterceptor } from './core/interceptors/auth.interceptor';

import { HomeComponent } from './modules/home/home.component';
import { AuthenticationComponent } from './modules/authentication/authentication.component';
import { LoginComponent } from './modules/authentication/login/login.component';
import { RegistrationComponent } from './modules/authentication/registration/registration.component';
import { PreviewVehiclesComponent } from './modules/home/preview-vehicles/preview-vehicles.component';
import { VehicleComponent } from './modules/home/preview-vehicles/vehicle/vehicle.component';
import { AddVehicleComponent } from './modules/home/preview-vehicles/add-vehicle/add-vehicle.component';
import { GarageComponent } from './modules/home/preview-vehicles/garage/garage.component';
import { AddNewVehicleComponent } from './modules/add-new-vehicle/add-new-vehicle.component';
import { VehicleService } from './core/services/vehicle.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthenticationComponent,
    LoginComponent,
    RegistrationComponent,
    PreviewVehiclesComponent,
    VehicleComponent,
    AddVehicleComponent,
    GarageComponent,
    AddNewVehicleComponent,
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
    IconModule
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
