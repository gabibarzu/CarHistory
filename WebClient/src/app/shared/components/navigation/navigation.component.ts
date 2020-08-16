import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  @Input() userDetails: any;

  constructor(private router: Router) {
  }

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/authentication/login']);
  }
}
