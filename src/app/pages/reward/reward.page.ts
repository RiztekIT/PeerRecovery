import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavController, PopoverController } from '@ionic/angular';
import { CalendarPageModule } from '../calendar/calendar.module';

@Component({
  selector: 'app-reward',
  templateUrl: './reward.page.html',
  styleUrls: ['./reward.page.scss'],
})
export class RewardPage implements OnInit {
  selectedLocation = "Dr.Rose Ortiz";
  review = [
    {
      img: "../../../assets/image/arron.png",
      name: "Send final work evidence",
      ago: "Finished: 2 days ago",
      detail:
        "Phasellus risus turpis, pretium sit amet magna non, molestie ultricies enim. Nullam pulvinar ",
      average: 1,
      color: 'success',
    },
    {
      img: "../../../assets/image/fionna.png",
      name: "Video and practice volumen 3",
      ago: "Not finished yet",
      detail:
        "Phasellus risus turpis, pretium sit amet magna non, molestie ultricies enim. Nullam pulvinar ",
        average: .5,
        color: 'warning',
    },
    {
      img: "../../../assets/image/patricia.png",
      name: "Send work evidence",
      ago: "Finished: 2 days ago",
      detail:
        "Phasellus risus turpis, pretium sit amet magna non, molestie ultricies enim. Nullam pulvinar ",
        average: 1,
        color: 'success',
    },
    {
      img: "../../../assets/image/jacob.png",
      name: "Video and practice volumen 2",
      ago: "Finished: 2 days ago",
      detail:
        "Phasellus risus turpis, pretium sit amet magna non, molestie ultricies enim. Nullam pulvinar ",
        average: 1,
        color: 'success',
    },
    {
      img: "../../../assets/image/fionna.png",
      name: "Send work evidence",
      ago: "Not finished yet",
      detail:
        "Phasellus risus turpis, pretium sit amet magna non, molestie ultricies enim. Nullam pulvinar ",
        average: .7,
        color: 'warning',
    },
    {
      img: "../../../assets/image/patricia.png",
      name: "Video and practice volumen 1",
      ago: "Not finished yet",
      detail:
        "Phasellus risus turpis, pretium sit amet magna non, molestie ultricies enim. Nullam pulvinar ",
        average: .1,
        color: 'danger',
    },
  ];




  activeTab: string = "PatientInfo";
  constructor(
    private popoverController: PopoverController,
    private modalController: ModalController,
    private nav: NavController,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.activeTab = params["id"];
    });
  }
  chageTab(name) {
    this.activeTab = name;
  }

  async presentModal() {
    /*const modal = await this.modalController.create({
      component: CallModalPa,
      cssClass: "callModal",
    });
    return await modal.present();*/
  }
  chat() {
    this.nav.navigateForward("/chat");
  }
}


