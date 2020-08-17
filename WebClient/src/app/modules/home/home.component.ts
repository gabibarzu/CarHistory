
import { AuthenticationService } from '../authentication/authentication.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private service: AuthenticationService) { }

  get fullName() {
    return localStorage.getItem('fullName');
  }
}
