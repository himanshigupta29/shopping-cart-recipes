import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  token: string;

  constructor(private router: Router) { }

  signUpUser(email: string, password: string) {

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(error => console.log(error))
      .then(response => {

      });

  }

  onSignIn(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(error => console.log(error))
      .then(response => {

        this.router.navigate(['/']);

        firebase.auth().currentUser.getToken()
          .then(token => {
            this.token = token
          })

      });
  }

  getToken() {
    firebase.auth().currentUser
      .getToken().then(token => this.token = token);

    return this.token;
  }


  isAuthenticated() {
    return this.token != null;
  }

  signOut() {

    firebase.auth().signOut();
    this.token = null;
    this.router.navigate(['/']);


  }



}
