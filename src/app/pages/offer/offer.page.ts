import { UtilService } from './../../services/util.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.page.html',
  styleUrls: ['./offer.page.scss'],
})
export class OfferPage implements OnInit {

  constructor(
    private util: UtilService
  ) { }

  ngOnInit() {
  }

  goToHome() {
    this.util.navCtrl.navigateRoot('home')
  }

}
