import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrackingService } from 'src/app/services/tracking.service';
import { 
  ModalController, 
  NavParams 
  } from '@ionic/angular';

@Component({
  selector: 'app-panics',
  templateUrl: './panics.page.html',
  styleUrls: ['./panics.page.scss'],
})
export class PanicsPage implements OnInit {

  constructor(
    public trackingSVC: TrackingService,
    private router: Router,
    private modalController: ModalController,
    private navParams: NavParams
  ) { }

  Users: any[] = [];
  user;

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('user'));
    this.getUser();
  }


  getUser(){
    /* console.log(this.user); */
    this.trackingSVC.getUsers().on('value', resp=>{
      this.Users  = [];
      let c = 0;
      resp.forEach((childSnapshot: any) => {
          const item = childSnapshot.val();
          item.key = childSnapshot.key;
          /* item.selected = true; */
          if (item.key!=this.user.uid){
            console.log(item);
            console.log(this.user);
            this.trackingSVC.getRel(this.user,item.key).once('value', (resp: any) =>{
              console.log(resp);
              console.log(resp.val());
        
              item.selected = resp.val();
              if (resp.val()){

                this.Users.push(item);
              }
   
            })
            

          }
      });
      //this.selected = this.Users
      console.log(this.Users);
      

    })
  }


  selectUser(item){
    console.log(item);
    this.trackingSVC.panicselectUser = item;    
    
  }

  async closeModal(item) {
    const onClosedData: string = JSON.stringify(item);
    await this.modalController.dismiss(onClosedData);
  }

}
