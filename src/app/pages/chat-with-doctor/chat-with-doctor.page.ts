import { UtilService } from "./../../services/util.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-chat-with-doctor",
  templateUrl: "./chat-with-doctor.page.html",
  styleUrls: ["./chat-with-doctor.page.scss"],
})
export class ChatWithDoctorPage implements OnInit {
  problems: any = [
    {
      title: "Coronavirus consult",
      img: "../../../assets/imgs/data/chatWithDoctor/prob1.svg",
      actualPrice: 150,
      marketPrice: 250,
    },
    {
      title: "Gynaecology",
      img: "../../../assets/imgs/data/chatWithDoctor/prob2.svg",
      actualPrice: 249,
      marketPrice: 249,
    },
    {
      title: "Cardiology",
      img: "../../../assets/imgs/data/chatWithDoctor/prob3.svg",
      actualPrice: 150,
      marketPrice: 250,
    },
    {
      title: "Eye & Vision",
      img: "../../../assets/imgs/data/chatWithDoctor/prob4.svg",
      actualPrice: 199,
      marketPrice: 299,
    },
    {
      title: "Diet and Nutrition",
      img: "../../../assets/imgs/data/chatWithDoctor/prob5.svg",
      actualPrice: 150,
      marketPrice: 250,
    },
    {
      title: "Diabetes & endoscopy",
      img: "../../../assets/imgs/data/chatWithDoctor/prob6.svg",
      actualPrice: 150,
      marketPrice: 250,
    },
    {
      title: "Breathing & Chest",
      img: "../../../assets/imgs/data/chatWithDoctor/prob7.svg",
      actualPrice: 249,
      marketPrice: 349,
    },
    {
      title: "Dental",
      img: "../../../assets/imgs/data/chatWithDoctor/prob8.svg",
      actualPrice: 150,
      marketPrice: 250,
    },
    {
      title: "Homeopathy",
      img: "../../../assets/imgs/data/chatWithDoctor/prob9.svg",
      actualPrice: 150,
      marketPrice: 250,
    },
    {
      title: "Cancer",
      img: "../../../assets/imgs/data/chatWithDoctor/prob10.svg",
      actualPrice: 150,
      marketPrice: 250,
    },
    {
      title: "Ayurveda",
      img: "../../../assets/imgs/data/chatWithDoctor/prob11.svg",
      actualPrice: 150,
      marketPrice: 250,
    },
    {
      title: "Physiotherapy",
      img: "../../../assets/imgs/data/chatWithDoctor/prob12.svg",
      actualPrice: 150,
      marketPrice: 250,
    },
    {
      title: "Child Specialist",
      img: "../../../assets/imgs/data/chatWithDoctor/prob13.svg",
      actualPrice: 150,
      marketPrice: 250,
    },
    {
      title: "Skin and hair",
      img: "../../../assets/imgs/data/chatWithDoctor/prob14.svg",
      actualPrice: 150,
      marketPrice: 250,
    },
  ];
  constructor(private util: UtilService) {}

  ngOnInit() {}

  goToPurchaseChat() {}
}
