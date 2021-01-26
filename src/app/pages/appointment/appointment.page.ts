import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentService } from 'src/app/services/appointment.service';
import { AuthService } from 'src/app/services/auth.service';
import firebase from 'firebase';


@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.page.html',
  styleUrls: ['./appointment.page.scss'],
})
export class AppointmentPage implements OnInit {

  data: any;
  
  appointmentID: string = "";
  title: string = "";
  description: string = "";
  date: string = "21-11-2021";
  time: string = "08:00";


  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private firebaseAuthService: AuthService,
    public appointmentService: AppointmentService) {
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.data = JSON.parse(params.special);
        console.log("appointmentID:", this.data.appointmentID);
        this.getAppointment(this.data.appointmentID)
      }
    });
  }


  ngOnInit() {
  }

  getAppointment(appointmentID){
   this.appointmentService.getAppointment(appointmentID).on('value', resp=>{
      this.appointmentID = appointmentID;
      this.title = resp.val().title;
      this.description = resp.val().description;
      this.date = resp.val().date;
      this.time = resp.val().time;
      console.log(resp.val());
    })
  }


  buttonSaveAppointment(){
    let Obj = {
      userID: this.firebaseAuthService.usersign.uid,
      title: this.title,
      description: this.description,
      date: this.date,
      time: this.time,
      updated: firebase.firestore.Timestamp.fromDate(new Date())
    }

    if(this.appointmentID){
      let appointmentObj ={
        appointmentID:  this.appointmentID,
        ...Obj
      }
      this.appointmentService.updateAppointment(appointmentObj);
    }else{
      let appointmentObj ={
        created: firebase.firestore.Timestamp.fromDate(new Date()),
        ...Obj
      }
      console.log(appointmentObj);
      this.appointmentService.postAppointment(appointmentObj);
    }

  }





}
