import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  ID_Chat:string = "";

  message:string = "";
  chatMessages: any[] = [];
  data: any;
  chatDBRef:any;
  constructor(private nav: NavController, 
              private route: ActivatedRoute, 
              private router: Router,
              private firebaseAuthService: AuthService) {
      this.route.queryParams.subscribe(params => {
        if (params && params.special) {
          this.data = JSON.parse(params.special);
          console.log(this.data.ID_Chat);
          this.ID_Chat = this.data.ID_Chat;
          this.chatDBRef = this.firebaseAuthService.firebaseDB.doc('messages/'+this.data.ID_Chat);
          this.getChat();
        }
      });
    }

  ngOnInit() {
  }
  getChat(){


    this.chatMessages = [];
    this.chatDBRef.onSnapshot(  snap =>{
      this.chatMessages = [];
      const data = snap.data();
      for (const key in data) {
          const value = data[key];
          this.chatMessages.push({
            ...value
          });

      }

      console.log(this.chatMessages);
      this.chatMessages.sort(function(a, b) { return a.Sent.seconds - b.Sent.seconds; })
      console.log(this.chatMessages);
    });
  }

  sendMessage(){

    console.log(this.message);



    /*var docData = {
      stringExample: "Hello world!",
      booleanExample: true,
      numberExample: 3.14159265,
      arrayExample: [5, true, "hello"],
      nullExample: null,
      objectExample: {
          a: 5,
          b: {
              nested: "foo"
          }
      }
  };
  this.firebaseAuthService.firebaseDB.collection("messages").doc(this.ID_Chat).add(docData).then(function() {
      console.log("Document successfully written!");
  });*/





  
  //Update the chat info
  const newChatInfo = {
    LastMessage: this.message,
    LastMessageSent: new Date()
  }
  this.firebaseAuthService.firebaseDB.collection("chats").doc(this.ID_Chat).update( newChatInfo )

  this.message = ""; 
  }


  goToChatList(){
    this.nav.navigateBack("/chatList")
  }




}

     