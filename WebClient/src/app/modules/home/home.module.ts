import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { PreviewVehiclesComponent } from './preview-vehicles/preview-vehicles.component';
import { AddVehicleTileComponent } from './preview-vehicles/add-vehicle-tile/add-vehicle-tile.component';
import { GarageTileComponent } from './preview-vehicles/garage-tile/garage-tile.component';
import { AuthenticationComponent } from '../authentication/authentication.component';
import { LoginComponent } from '../authentication/login/login.component';
import { RegistrationComponent } from '../authentication/registration/registration.component';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CustomIconsModule } from 'src/app/shared/components/custom-icons/custom-icons.module';
import { IconModule } from 'src/app/shared/components/icon/icon.module';
import { VehicleTileModule } from 'src/app/shared/components/vehicle-tile/vehicle-tile.module';


@NgModule({
  declarations: [
    HomeComponent,
    PreviewVehiclesComponent,
    AddVehicleTileComponent,
    GarageTileComponent,
    AuthenticationComponent,
    LoginComponent,
    RegistrationComponent
  ],
  exports: [
    HomeComponent,
    PreviewVehiclesComponent,
    AddVehicleTileComponent,
    GarageTileComponent,
    AuthenticationComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      progressBar: true
    }),
    FormsModule,
    CustomIconsModule,
    IconModule,
    VehicleTileModule
  ]
})
export class HomeModule { }
