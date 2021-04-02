import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AlertController, ModalController, NavController } from "@ionic/angular";
import { NavigationExtras } from '@angular/router';
import { AppointmentPageModule } from "../appointment/appointment.module";
import { AuthService } from "src/app/services/auth.service";
import { AppointmentService } from "src/app/services/appointment.service";
import firebase from 'firebase';

@Component({
  selector: "app-calendar",
  templateUrl: "./calendar.page.html",
  styleUrls: ["./calendar.page.scss"],
})
export class CalendarPage implements OnInit {
  
  appointmentsDBRef:any;
  Appointments: any[] = [];
  totalAppointments = 4;
  constructor(private alertController: AlertController,
              private nav: NavController,
              private router: Router,
              private modalCtr: ModalController,
              private firebaseAuthService: AuthService,
              public appointmentService: AppointmentService) {


    this.appointmentsDBRef = this.firebaseAuthService.firebaseDB.collection('Appointments');
                this.getAppointments();

              }


  ngOnInit() {}
  /*async presentAlertRadio() {
    const alert = await this.alertController.create({
      header: "Set Doctor",
      inputs: [
        {
          name: "Kirakwall",
          type: "radio",
          label: "Kirakwall",
          value: "Kirakwall",
          checked: true,
        },
        {
          name: "Kirakwall2",
          type: "radio",
          label: "Kirakwall2",
          value: "Kirakwall2",
        },
        {
          name: "Kirakwall3",
          type: "radio",
          label: "Kirakwall3",
          value: "Kirakwall3",
        },
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: () => {},
        },
        {
          text: "Ok",
          handler: (data) => {
            this.selectedLocation = data;
          },
        },
      ],
    });

    await alert.present();
  }*/

  getAppointments(){
    this.appointmentService.getAppointments().on('value', resp=>{
      this.Appointments  = [];
      resp.forEach((childSnapshot: any) => {
          const item = childSnapshot.val();
          item.key = childSnapshot.key;
          this.Appointments.push(item);
      });
      console.log(resp);
      console.log(this.Appointments);
    })
    
    }



  openAppointmentPage(item) {
    let appointment = {
      appointmentID: item.key,
    };
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(appointment)
      }
    };
    this.router.navigate(['appointment'], navigationExtras);

  }

  newAppointmentPage(){
    this.router.navigate(['appointment']);
  }



}
