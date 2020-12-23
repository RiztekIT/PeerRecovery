import { UtilService } from './../../services/util.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-on-boarding',
  templateUrl: './on-boarding.page.html',
  styleUrls: ['./on-boarding.page.scss'],
})
export class OnBoardingPage implements OnInit {
  @ViewChild('slides', { static: true }) slides: any;
  activeIndex: any = 0;
  slideOpts: any = {
    speed: 400,
    autoplay: {
      delay: 200,
    },
  };
  constructor(
    private util: UtilService
  ) { }

  ngOnInit() {
  }

  onSlideChange() {
    this.slides.getActiveIndex().then((index) => {
      this.activeIndex = index;
    })
  }

  goToHome() {
    this.util.navCtrl.navigateRoot('/home');
  } 

}
