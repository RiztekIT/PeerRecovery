import { Component, OnInit, ViewChild } from '@angular/core';
import { Route, Router } from '@angular/router';
import { IonContent, NavController } from '@ionic/angular';
import { ActivatedRoute } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
import { ChatService } from 'src/app/services/chat.service';
import { snapshotToArray } from '../chat-users-list/chat-users-list.page';
import firebase from 'firebase';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  @ViewChild('chatcontent', {static: false}) content: IonContent;

  ID_Chat:string = "";

  message:string = "";
  chatMessages: any[] = [];
  data: any;
  chatDBRef:any;
  chatUser;
  constructor(private nav: NavController, 
              private route: ActivatedRoute, 
              private router: Router,
              public firebaseAuthService: AuthService,
              public chatService: ChatService) {
   /*    this.route.queryParams.subscribe(params => {
        if (params && params.special) {
          this.data = JSON.parse(params.special);
          console.log(this.data.ID_Chat);
          this.ID_Chat = this.data.ID_Chat;
          this.chatDBRef = this.firebaseAuthService.firebaseDB.doc('messages/'+this.data.ID_Chat);
          
        }
      }); */
    }

  ngOnInit() {
    this.getChat();
    this.getUserWith()
    this.chatService.readChats();

    
  }

  getUserWith(){
    if (JSON.parse(localStorage.getItem('user2'))){
  this.chatUser = JSON.parse(localStorage.getItem('user2'))
  console.log(this.chatUser)

}else{
  this.chatUser = JSON.parse(localStorage.getItem('users2'))
  console.log(this.chatUser)
}

  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.chatService.stopread()
  }

/*   getMessage(){
    this.chatService.getMessages
  } */

  

  getChat(){


   /*  this.chatMessages = [];
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
    }); */
console.log(localStorage.getItem('idchat'));
    this.chatService.getMessages(localStorage.getItem('idchat')).on('value', resp=>{
      let messages = snapshotToArray(resp)
      console.log(messages);
      this.chatMessages = messages;
      console.log(this.chatMessages);
      
      setTimeout(() => {
        this.scrollToBottom();
    }, 500);
    })
  }

  sendMessage(){

    console.log(this.message);

    let sendmessage = {
      message: this.message,
      sender: this.firebaseAuthService.usersign.uid,
      read:'false',
      sent: firebase.firestore.Timestamp.fromDate(new Date())
    }


    if (this.chatUser.displayName!='chatGroup'){

      this.chatService.newMessage(sendmessage);
      
      this.message = '';
    }else{
      this.chatService.newMessageGroup(sendmessage, this.chatUser.uid);
      this.message = '';
      
    }
    



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
 /*  const newChatInfo = {
    LastMessage: this.message,
    LastMessageSent: new Date()
  }
  this.firebaseAuthService.firebaseDB.collection("chats").doc(this.ID_Chat).update( newChatInfo )

  this.message = "";  */
  }


  goToChatList(){
    this.nav.navigateBack("/chatList")
    localStorage.removeItem('user2')
    localStorage.removeItem('users2')
    localStorage.removeItem('idchat')
  }


  scrollToBottom(){
    this.content.scrollToBottom(300);
    //document.getElementById('chatcontent').scrollTo();
  }


  eventoMensaje(tecla){
    console.log(tecla);
    if (tecla==13){
      this.sendMessage();
    }
  }




}

     