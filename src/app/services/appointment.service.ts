import { Injectable } from '@angular/core';
import { UserModel } from '../models/users.model';
import { AuthService } from './auth.service';
import { Observable, Subject } from 'rxjs';
import { of } from 'rxjs';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})

export class AppointmentService {

  constructor(private firebaseAuthService: AuthService) {   
   }

   getAppointment(appointmentID){
    return firebase.database().ref('Appointments').child(appointmentID);
   }

   updateAppointment(appointmentID, appointmentObj){
      return firebase.database()
      .ref('Appointments')
      .child(appointmentID)
      .update(appointmentObj);
   }

   getAppointments(){
    return firebase.database()
    .ref('Appointments/')
    .orderByChild("userID")
    .equalTo(this.firebaseAuthService.usersign.uid);
   }


  postAppointment(appointmentObj){
    var key = this.firebaseAuthService.usersign.uid + "_" + Date.now();
    firebase.database().ref('/Appointments/' + key).set(appointmentObj);
  }

}





