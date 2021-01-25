import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AlertController, ModalController, NavController } from "@ionic/angular";
import { NavigationExtras } from '@angular/router';
import { AppointmentPageModule } from "../appointment/appointment.module";

@Component({
  selector: "app-calendar",
  templateUrl: "./calendar.page.html",
  styleUrls: ["./calendar.page.scss"],
})
export class CalendarPage implements OnInit {
  text = "Prueba";
  selectedLocation = "Dr.Rose Ortiz";
  cancelAppoint = [
    {
      time: "10:00 am",
      img: "../../../assets/image/patricia.png ",
      name: "Consulta medica",
      price: "Nov 01 2021",
      age: "32",
      add: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      time: "10:30 am",
      img: "../../../assets/image/arron.png",
      name: "Consulta medica",
      price: "Nov 01 2021",
      age: "32",
      add: "Consulta del mes de Febrero",
    },
    {
      time: "11:00 am",
      img: "../../../assets/image/pearson.png",
      name: "Consulta medica",
      price: "Nov 01 2021",
      age: "32",
      add: "Consulta del mes de Marzo",
    },
    {
      time: "10:30 am",
      img: "../../../assets/image/benjamin.png",
      name: "Consulta medica",
      price: "Nov 01 2021",
      age: "32",
      add: "Consulta del mes de Abril",
    },
  ];

  user = {
    appointmentID: 10,
    title: 'Checkout',
    description: 'First year chekout',
    date: 'Nov 01 2021',
    time: '11:00 pm',
    /*info: {
      title: 'Go with the doctor',
      description: 'Go with the doctor to the first year chekout',
      date: 'Nov 01 2021',
      time: '11:00 pm',
    },
    ticks: [
      'Ionic', 'Angular',
    ]*/
  };



  totalAppointments = 4;
  constructor(private alertController: AlertController,
              private nav: NavController,
              private router: Router,
              private modalCtr: ModalController) {}


  ngOnInit() {}
  async presentAlertRadio() {
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
  }


  openAppointmentPage() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(this.user)
      }
    };
    this.router.navigate(['appointment'], navigationExtras);

  }


  /*async openAppointmentPage(){
    const modal = await this.modalCtr.create({
      component: AppointmentPageModule,
      componentProps:{
        user: this.user
      }
    })
    modal.present();
  }*/

  


}
