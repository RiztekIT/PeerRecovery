import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.page.html',
  styleUrls: ['./rewards.page.scss'],
})
export class RewardsPage implements OnInit {

  constructor(private nav: NavController) {

   }

  ngOnInit() {
  }
  
  openReward(){
    this.nav.navigateForward("/reward"); 
  } 



}
