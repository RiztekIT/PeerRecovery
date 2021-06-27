import { Component, OnInit, ViewChild } from '@angular/core';
import { Route, Router } from '@angular/router';
import { IonContent, NavController } from '@ionic/angular';
import { ActivatedRoute } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
import { ChatService } from 'src/app/services/chat.service';
import { snapshotToArray } from '../chat-users-list/chat-users-list.page';
import firebase from 'firebase';
import { HTTP } from '@ionic-native/http/ngx';

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
              public chatService: ChatService,
              public http: HTTP,
              ) {
   /*    this.route.queryParams.subscribe(params => {
        if (params && params.special) {
          this.data = JSON.parse(params.special);
          console.log(this.data.ID_Chat);
          this.ID_Chat = this.data.ID_Chat;
          this.chatDBRef = this.firebaseAuthService.firebaseDB.doc('messages/'+this.data.ID_Chat);
          
        }
      }); */
      this.route.queryParams.subscribe(params => {
        if (params && params.data) {
          let data = JSON.parse(params.data);
          data = JSON.parse(data)
          this.parametros = true;
          this.chatService.keymessage = data.key;
          this.chatUser = data.chatuser
          

     
        }
          
      });
    }

    /*  */
    messages: any[] = [];
    parametros;

  ngOnInit() {
 /*    this.getChat();
    this.getUserWith()
    this.chatService.readChats(); */
    if (!this.parametros){

      this.chatUser = this.chatService.user2
      console.log(this.chatUser,'USER');
    }
    this.getMessages()

    
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


/* console.log(localStorage.getItem('idchat'));
    this.chatService.getMessages(localStorage.getItem('idchat')).on('value', resp=>{
      let messages = snapshotToArray(resp)
      console.log(messages);
      this.chatMessages = messages;
      console.log(this.chatMessages);
      
      setTimeout(() => {
        this.scrollToBottom();
    }, 500);
    }) */
  }

  sendMessage(){

    console.log(this.message);
/* 
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
      
    } */


    console.log(this.message);
    this.chatService.sendMessage(this.message, this.firebaseAuthService.usersign, this.chatUser )
    this.message = '';

    this.chatService.getTokenID(this.chatUser.uid).once('value', token=>{

      console.log(token.val(), 'USERS');

      /* this.sendLocation(this.currentPos,token.val()) */
      this.sendMessageNoti(this.message, this.chatService.keymessage,token.val() ,this.chatUser)

    })
    
    
  }

  sendMessageNoti(message, keymessage, user, chatuser){

    let data={
      key: keymessage,
      m: message,
      user: chatuser

    }

    console.log(data,'data');

    let body = {
      "notification":{
        "title":"PeerRecovery",
        "body":"New Message",
        "sound":"default",
        "click_action":"FCM_PLUGIN_ACTIVITY",
        "icon":"fcm_push_icon"
      },
      "data":{
        "landing_page":"chat2",
        "data":data
      },
        "to":user,
        "priority":"high",
        "restricted_package_name":""
    }

    let headers = {
      'Authorization': 'key=AAAA7CwLHfI:APA91bGdbyFJFwO4xWEBilRVInU37vOoQ5jURZv0PHbD8zXc4pT58GEy1ETkskaOfIJEhHtR4YYMr4SbDRiuEI7BJG0JfoXDbguV691brsZri_bLqMQLc-FWffr1EakQsurEnb0ZrN2_',
      'Content-Type': 'application/json'
    }

    this.http.post('https://fcm.googleapis.com/fcm/send',body,headers).then(res=>{
      console.log(res,'res');
    }).catch(e=>{
      console.log(e,'e');
    })

  }


  goToChatList(){
    this.nav.navigateBack("/chat")
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



  /*  */

  getMessages(){
    
    this.chatService.getMessages().orderByChild('timestamp').on('value', resp=>{
      this.messages = [];
      
      resp.forEach((childSnapshot: any) =>{
        let m = childSnapshot.val();
        console.log(childSnapshot.val());

        this.chatService.getUser(m.sender).on('value', resp=>{
          /* console.log(resp.val()); */
          m.senderuser = resp.val();
          
          
          
          
          this.messages.push(m);
          this.chatMessages = this.messages;
         })



        
         
        
         setTimeout(() => {
          this.scrollToBottom();
      }, 500);
        
      })

      console.log(this.messages);

    })
  }




}

     