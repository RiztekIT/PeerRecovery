import { UtilService } from "./../../services/util.service";
import { Component, OnInit } from "@angular/core";
import { PopoverController } from "@ionic/angular";
import { PopOverContentComponent } from "src/app/components/pop-over-content/pop-over-content.component";

@Component({
  selector: "app-appointment-list",
  templateUrl: "./appointment-list.page.html",
  styleUrls: ["./appointment-list.page.scss"],
})
export class AppointmentListPage implements OnInit {
  data: any = {
    upcoming: [
      {
        doctorName: "Dr.Rose Ortiz",
        specialistIn: "Orthopedics",
        location: "Low Mill Farm, Lendales Lane, Pickering",
        img: "../../../assets/imgs/data/appointment/common_appointment.png",
        date: "2.Nov 2019 10:00am",
        patientName: "Patrick Stanley",
      },
    ],
    past: [
      {
        doctorName: "Dr.Rachel Carrol",
        specialistIn: "Orthopedics",
        location: "Low Mill Farm, Lendales Lane, Pickering",
        img: "../../../assets/imgs/data/appointment/appointment2.png",
        date: "5.Oct 2019 11:00am",
        patientName: "Mary Ann Fuller",
      },
      {
        doctorName: "Dr.Bianca Hart",
        specialistIn: "Orthopedics",
        location: "Low Mill Farm, Lendales Lane, Pickering",
        img: "../../../assets/imgs/data/appointment/appointment3.png",
        date: "12.Oct 2019 05:00pm",
        patientName: "Fionna Fuller",
      },
      {
        doctorName: "Dr.Alex Baker",
        specialistIn: "Orthopedics",
        location: "Low Mill Farm, Lendales Lane, Pickering",
        img: "../../../assets/imgs/data/appointment/appointment4.png",
        date: "22.Oct 2019 07:30am",
        patientName: "Frank Green",
      },
    ],
  };
  constructor(
    private util: UtilService,
    private popoverCtrl: PopoverController
  ) {}

  ngOnInit() {}

  async handleButtonClick(ev) {
    ev.stopPropagation();
    const popover = await this.popoverCtrl.create({
      component: PopOverContentComponent,
      event: ev,
      mode: "ios",
      translucent: true,
    });
    return popover.present();
  }

  goToAppointmentDetail() {}
}
