import { UtilService } from './../../services/util.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-starter',
  templateUrl: './starter.page.html',
  styleUrls: ['./starter.page.scss'],
})
export class StarterPage implements OnInit {

  constructor(
    private util: UtilService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.util.menuCtrl.enable(false);
  }

  goToSignIn() {
    this.util.navCtrl.navigateForward('signIn');
  }

  signinGoogle(){
    
  }

}
