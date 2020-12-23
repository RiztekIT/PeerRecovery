import { UtilService } from "./../../services/util.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-doctor-card-view",
  templateUrl: "./doctor-card-view.page.html",
  styleUrls: ["./doctor-card-view.page.scss"],
})
export class DoctorCardViewPage implements OnInit {
  specialist = [
    {
      name: "Dr.Janice Bailey",
      specialist: "Gynaecology",
      img: "../../../assets/imgs/data/specialists/specialist1.png",
    },
    {
      name: "Dr.Matthew Willis",
      specialist: "General Surgeon",
      img: "../../../assets/imgs/data/specialists/specialist2.png",
    },
    {
      name: "Dr.Jasmine Smith",
      specialist: "Pediatric",
      img: "../../../assets/imgs/data/specialists/specialist3.png",
    },
    {
      name: "Dr.Rose Ortiz",
      specialist: "Orthopedics",
      img: "../../../assets/imgs/data/specialists/specialist4.png",
    },
    {
      name: "Dr.Nancy Riley",
      specialist: "Gastroenterologists",
      img: "../../../assets/imgs/data/specialists/specialist5.png",
    },
    {
      name: "Dr.Bruce Hart",
      specialist: "Endoscopies ",
      img: "../../../assets/imgs/data/specialists/specialist6.png",
    },
  ];
  constructor(private util: UtilService) {}

  ngOnInit() {}

  goToDoctorDetail() {}
}
