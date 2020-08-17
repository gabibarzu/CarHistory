import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../authentication.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formModel = {
    UserName: '',
    Password: ''
  }

  userDetails: any;

  constructor(private service: AuthenticationService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    if (localStorage.getItem('token') != null)
      this.router.navigateByUrl('/home');
  }

  onSubmit(form: NgForm) {
    this.service.login(form.value).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token);
        this.service.getUserProfile().subscribe(
          res => {
            this.userDetails = res;
            localStorage.setItem('fullName', this.userDetails.fullName);
          },
          err => {
            console.log(err);
          },
        );
        this.router.navigateByUrl('/home');
      },
      (err: any) => {
        if (err.status == 400) {
          this.toastr.error('Incorrect username or password.', 'Authentication failed.');
        }
        else {
          this.toastr.error('Something bad happend.', 'Ups!');
        }
      }
    );
  }
}
