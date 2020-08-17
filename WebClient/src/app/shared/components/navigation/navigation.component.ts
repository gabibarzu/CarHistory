import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  constructor(private router: Router) {
  }

  get fullName() {
    return localStorage.getItem('fullName');
  }

  onLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('fullName');
    this.router.navigate(['/authentication/login']);
  }
}
