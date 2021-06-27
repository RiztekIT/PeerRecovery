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
  date: string;
  time: string;
  user;
  edit = false;
  


  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private firebaseAuthService: AuthService,
    public appointmentService: AppointmentService) {
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.data = JSON.parse(params.special);
        this.edit = true;
        //console.log("appointmentID:", this.data.appointmentID);
        this.getAppointment(this.data)
      }else{
        this.date = new Date().toString()
        
        this.edit = false;
      }
    });
  }


  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('user'));
    console.log(this.edit,'edit');
    
  }

  getAppointment(app){
  /*  this.appointmentService.getAppointment(appointmentID).on('value', resp=>{
      this.appointmentID = appointmentID;
      this.title = resp.val().title;
      this.description = resp.val().description;
      this.date = resp.val().date;
      this.time = resp.val().time;
      console.log(resp.val());
    }) */
    console.log(app);
    let fecha = new Date()
    let hoy = new Date()

    
    fecha.setTime(app.appointmentdate.seconds*1000)


    let h = +fecha - +hoy

    console.log(fecha,'fecha');
    console.log(hoy,'hoy');

    console.log(h,'dif');
    
/*     fecha.setHours(fecha.getHours()-6)

   console.log(fecha);  
   console.log(fecha.toISOString().split('T')[1]);   */
   

    this.title = app.title;
    this.description = app.description;


    
    this.date = fecha.toString()
    
    console.log(this.date);
  
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

    if(this.appointmentID){//Update
      let appointmentObj = {
        ...Obj
      }
      this.appointmentService.updateAppointment(this.appointmentID, appointmentObj);
    }else{
      let appointmentObj = {
        created: firebase.firestore.Timestamp.fromDate(new Date()),
        ...Obj
      }
      console.log(appointmentObj);
      this.appointmentService.postAppointment(appointmentObj);
    }

  }

  addappintment(){

    console.log(this.date);
 /*    console.log(this.time);
    let d = this.date + ' ' +  this.time */

    /* let d2 = new Date(d).toString()

    console.log(d2);
    
    
    let appdate = firebase.firestore.Timestamp.fromDate(new Date(d2))
    console.log(appdate); */
    
    
    let appintment = {
      timestamp: firebase.firestore.Timestamp.fromDate(new Date()),
      appointmentdate: firebase.firestore.Timestamp.fromDate(new Date(this.date)),
      description: this.description,
      title: this.title,
      user: this.user.uid,
      done: false
    }

    console.log(appintment);
    this.appointmentService.addApp(appintment)

    this.router.navigate(['appoinments']);
  
  }


  editappintment(){

    console.log(this.date,'fecha');
/*     console.log(this.time,'time');
    let d = this.date + ' ' +  this.time
    console.log(d);
    let appdate = firebase.firestore.Timestamp.fromDate(new Date(d))
    console.log(appdate); */
    /* console.log(this.data,'key'); */
    let appintment;

    appintment = {
      timestamp: firebase.firestore.Timestamp.fromDate(new Date()),
      appointmentdate: firebase.firestore.Timestamp.fromDate(new Date(this.date)),
      description: this.description,
      title: this.title,
      user: this.user.uid,
      done: false,
      appkey: this.data.appkey
    }

    console.log(appintment);
    this.appointmentService.editapp(appintment)
    this.router.navigate(['appoinments']);
  
  }







}
