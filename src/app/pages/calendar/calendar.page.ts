import { Component, OnInit } from "@angular/core";
import { AlertController } from "@ionic/angular";

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
      price: "Mon 30 Jua 2020",
      age: "32",
      add: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      time: "10:30 am",
      img: "../../../assets/image/arron.png",
      name: "Consulta medica",
      price: "Mon 30 Feb 2020",
      age: "32",
      add: "Consulta del mes de Febrero",
    },
    {
      time: "11:00 am",
      img: "../../../assets/image/pearson.png",
      name: "Consulta medica",
      price: "Mon 30 Mar 2020",
      age: "32",
      add: "Consulta del mes de Marzo",
    },
    {
      time: "10:30 am",
      img: "../../../assets/image/benjamin.png",
      name: "Consulta medica",
      price: "Mon 30 Apr 2020",
      age: "32",
      add: "Consulta del mes de Abril",
    },
  ];
  constructor(private alertController: AlertController) {}

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
}
