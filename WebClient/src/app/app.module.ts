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
import { PreviewCarsComponent } from './modules/home/preview-cars/preview-cars.component';
import { CarComponent } from './modules/home/preview-cars/car/car.component';
import { CarIconComponent } from './shared/components/custom-icons/car-icon/car-icon.component';
import { AddCarComponent } from './modules/home/preview-cars/add-car/add-car.component';
import { GarageComponent } from './modules/home/preview-cars/garage/garage.component';
import { GarageIconComponent } from './shared/components/custom-icons/garage-icon/garage-icon.component';
import { KeyIconComponent } from './shared/components/custom-icons/key-icon/key-icon.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    NavigationComponent,
    PreviewCarsComponent,
    CarComponent,
    CarIconComponent,
    AddCarComponent,
    GarageComponent,
    GarageIconComponent,
    KeyIconComponent
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
