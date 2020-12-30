import { Injectable } from '@angular/core';
import "firebase/auth";


import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  firebaseConfig = {
    apiKey: "AIzaSyDpPLmgRkC8ublILfSGj8961ku-hyTpNvs",
    authDomain: "peerrecovery-app.firebaseapp.com",
    databaseURL: "https://peerrecovery-app-default-rtdb.firebaseio.com",
    projectId: "peerrecovery-app",
    storageBucket: "peerrecovery-app.appspot.com",
    messagingSenderId: "1014351207922",
    appId: "1:1014351207922:web:6d002db3f73a4587505f6b",
    measurementId: "G-222ERRG0EM"
};

  constructor(private router: Router) {
    firebase.initializeApp(this.firebaseConfig)
   }
}
