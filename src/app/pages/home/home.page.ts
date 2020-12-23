import { UtilService } from "./../../services/util.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit {
  specialist = [
    {
      name: "Dr.Janice Bailey",
      specialist: "Gynaecology",
      img: "../../../assets/imgs/data/Specialist/Specialist1.png",
    },
    {
      name: "Dr.Matthew Willis",
      specialist: "General Surgeon",
      img: "../../../assets/imgs/data/Specialist/Specialist2.png",
    },
    {
      name: "Dr.Diana Willis",
      specialist: "Homeopathic",
      img: "../../../assets/imgs/data/Specialist/Specialist3.png",
    },
  ];
  treatments = [
    {
      img: "../../../assets/imgs/data/home/treat1.svg",
      name: "General Medicine",
      color: "#81BA83",
    },
    {
      img: "../../../assets/imgs/data/home/treat2.svg",
      name: "Woman's Health",
      color: "#E48A84",
    },
    {
      img: "../../../assets/imgs/data/home/treat3.svg",
      name: "Bone & Joints",
      color: "#A585BD",
    },
    {
      img: "../../../assets/imgs/data/home/treat4.svg",
      name: "Skin & Hair",
      color: "#00A8E5",
    },
  ];
  constructor(private util: UtilService) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.util.menuCtrl.enable(true);
  }

  goToSearch() {
    this.util.navCtrl.navigateForward("search");
  }

  goToAppointmentDetail() {}

  goToAllSpecialist() {
    this.util.navCtrl.navigateForward("doctorCardView");
  }

  goToDoctorDetail() {}

  goToAllTreatments() {}

  goToAllFavoriteDoctor() {}

  goToChatWithDoc() {
    this.util.navCtrl.navigateForward("chatWithDoctor");
  }

  goToBuyPlan() {}
}
