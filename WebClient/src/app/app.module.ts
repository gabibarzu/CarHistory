import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AuthenticationService } from './modules/authentication/authentication.service';
import { AuthenticationComponent } from './modules/authentication/authentication.component';
import { RegistrationComponent } from './modules/authentication/registration/registration.component';
import { LoginComponent } from './modules/authentication/login/login.component';
import { HomeComponent } from './modules/home/home.component';
import { AuthInterceptor } from './core/auth/auth.interceptor';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { PreviewVehiclesComponent } from './modules/home/preview-vehicles/preview-vehicles.component';
import { VehicleComponent } from './modules/home/preview-vehicles/vehicle/vehicle.component';
import { VehicleIconComponent } from './shared/components/custom-icons/vehicle-icon/vehicle-icon.component';
import { AddVehicleComponent } from './modules/home/preview-vehicles/add-vehicle/add-vehicle.component';
import { GarageComponent } from './modules/home/preview-vehicles/garage/garage.component';
import { GarageIconComponent } from './shared/components/custom-icons/garage-icon/garage-icon.component';
import { KeyIconComponent } from './shared/components/custom-icons/key-icon/key-icon.component';
import { IconComponent } from './shared/components/icon/icon.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    NavigationComponent,
    PreviewVehiclesComponent,
    VehicleComponent,
    VehicleIconComponent,
    AddVehicleComponent,
    GarageComponent,
    GarageIconComponent,
    KeyIconComponent,
    IconComponent
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
    FormsModule
  ],
  providers: [AuthenticationService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
