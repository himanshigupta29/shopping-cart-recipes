import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {

  }

  onSignIn(form: NgForm) {

    let email = form.value.email;
    let password = form.value.password;

    console.log('============', email, password, password, password);

    this.authService.onSignIn(email, password);

  }



}
