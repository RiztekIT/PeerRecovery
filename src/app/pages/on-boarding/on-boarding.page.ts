import { UtilService } from './../../services/util.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

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
    private util: UtilService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSlideChange() {
    this.slides.getActiveIndex().then((index) => {
      this.activeIndex = index;
    })
  }

  goToHome() {
    console.log('home');
    //this.util.navCtrl.navigateRoot('/home');
    this.router.navigate(['/home'])
  } 

}
