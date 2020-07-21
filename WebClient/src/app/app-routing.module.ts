import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './modules/authentication/authentication.component';
import { RegistrationComponent } from './modules/authentication/registration/registration.component';
import { LoginComponent } from './modules/authentication/login/login.component';
import { AuthGuard } from './core/auth/auth.guard';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/authentication/login', pathMatch: 'full' },
  {
    path: 'authentication', component: AuthenticationComponent,
    children: [
      { path: 'registration', component: RegistrationComponent },
      { path: 'login', component: LoginComponent }
    ]
  },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
