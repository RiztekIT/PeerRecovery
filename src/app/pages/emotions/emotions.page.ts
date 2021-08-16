import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UtilService } from 'src/app/services/util.service';
import firebase from 'firebase';




@Component({
  selector: 'app-emotions',
  templateUrl: './emotions.page.html',
  styleUrls: ['./emotions.page.scss'],
})
export class EmotionsPage implements OnInit {

  emotions = [
    {
    title:'Afraid',
    img:'afraid.svg'
  },
    {
    title:'Angry',
    img:'angry.svg'
  },
    {
    title:'Arrogant',
    img:'arrogant.svg'
  },
    {
    title:'Bored',
    img:'bored.svg'
  },
    {
    title:'Cool',
    img:'cool.svg'
  },
    {
    title:'Crying',
    img:'crying.svg'
  },
    {
    title:'Dead',
    img:'dead.svg'
  },
    {
    title:'Evil',
    img:'evil.svg'
  },
    {
    title:'Excited',
    img:'excited.svg'
  },
    {
    title:'Gentleman',
    img:'gentleman.svg'
  },
    {
    title:'Grinning',
    img:'grinning.svg'
  },
    {
    title:'Happy',
    img:'happy.svg'
  },
    {
    title:'Hot',
    img:'hot.svg'
  },
    {
    title:'Hurt',
    img:'hurt.svg'
  },
    {
    title:'In-Love',
    img:'in-love.svg'
  },
    {
    title:'Kiss',
    img:'kiss.svg'
  },
    {
    title:'Lonely',
    img:'lonely.svg'
  },
    {
    title:'Nerd',
    img:'nerd.svg'
  },
    {
    title:'Pain',
    img:'pain.svg'
  },
    {
    title:'Proud',
    img:'proud.svg'
  },
    {
    title:'Sad',
    img:'sad.svg'
  },
    {
    title:'Satisfied',
    img:'satisfied.svg'
  },
    {
    title:'Shock',
    img:'shock.svg'
  },
    {
    title:'Shut',
    img:'shut.svg'
  },
    {
    title:'Shy',
    img:'shy.svg'
  },
    {
    title:'Sick',
    img:'sick.svg'
  },
    {
    title:'Sleep',
    img:'sleep.svg'
  },
    {
    title:'Smile',
    img:'smile.svg'
  },
    {
    title:'Straight',
    img:'straight.svg'
  },
    {
    title:'Surprised',
    img:'surprised.svg'
  },
    {
    title:'Tongue',
    img:'tongue.svg'
  },
    {
    title:'Wink',
    img:'wink.svg'
  },
    {
    title:'Worried',
    img:'worried.svg'
  }
  ]

  user;
  

  constructor(
    public modalController: ModalController,
    private utilSVC: UtilService
  ) { }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('user'));
  }

  close(){
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  setEmotion(e){

    let emotion = {
      timestamp: firebase.firestore.Timestamp.fromDate(new Date()),      
      emotion: e.title,
      img: e.img,
      user: this.user.uid,      
    }

    console.log(emotion);
    this.utilSVC.setEmotion(emotion)

    this.close();

  }

 /*  getEmotion(){

  } */

}
