import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RewardService } from '../../services/reward.service';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.page.html',
  styleUrls: ['./rewards.page.scss'],
})
export class RewardsPage implements OnInit {

  constructor(private nav: NavController, public rewardsSVC: RewardService) {

   }

   user;
   rewards: any[] = [];
   all = true;

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('user'));
    this.getRewards(this.user)
  }
  
  openReward(reward){
    //console.log(reward);
    this.rewardsSVC.rewardSelected = reward;
    this.nav.navigateForward("/reward"); 
  } 

  getRewards(user){
    
    this.rewardsSVC.getRewards(user.uid).on('value', resp=>{
      this.rewards = []

      resp.forEach((child: any) =>{
        let item = child.val()
        item.rewardkey = child.key;
        item.advance = this.getPorcent(item);
        if (this.all){
          this.rewards.push(item)
          
        }else{
          if (item.advance<1){
            
            this.rewards.push(item)

          }
        }
      })


      console.log(this.rewards);

    })



    
      }

      getPorcent(reward){
        console.log(reward.task);

        let total = reward.task.length;
        let done = 0;
        for (let i=0; i<total; i++){
          if (reward.task[i].done){

            done = done + 1;


          }


        }

        let ad = done/total

        return ad

      }


      getColor(reward){
        if (reward.advance<.20){
          return 'danger'
        }else if (reward.advance<.80){
          return 'warning'        
        }else {
          return 'success'
        }
      }


      allChange(){

        this.getRewards(this.user)

      }


}
