import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  
  constructor( private nav: NavController ) {

   }

  ngOnInit() {
  }

  goToChatList(){
    this.nav.navigateBack("/chatList")
  }
}
