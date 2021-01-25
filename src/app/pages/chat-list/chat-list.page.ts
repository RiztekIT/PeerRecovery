import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { UserModel } from "src/app/models/users.model";
import { AuthService } from "src/app/services/auth.service";
import { ChatService } from "src/app/services/chat.service";
import { NavigationExtras } from '@angular/router';


@Component({
  selector: "app-chat-list",
  templateUrl: "./chat-list.page.html",
  styleUrls: ["./chat-list.page.scss"],
})
export class ChatListPage implements OnInit {
  

  user:UserModel;
  users: any[] = [];
  chats: any[] = [];



  usersDBRef:any;
  chatsDBRef:any;
  constructor(private nav: NavController,
              private chatService: ChatService,
              private firebaseAuthService: AuthService) {

    this.usersDBRef = this.firebaseAuthService.firebaseDB.collection('users');
    this.chatsDBRef = this.firebaseAuthService.firebaseDB.collection('chats');

}

  ngOnInit() {



    this.user = new UserModel();
    this.user.ID_User = 10;
    this.user.Name = 'Alan Alexis';
    this.user.LastName = 'Ramírez Lugo';
    //this.chatService.postUser(this.user);


    
    this.getUsers();
    this.getChats();
  }
  


getChats(){
  this.chatsDBRef.onSnapshot(  snap =>{
    this.chats = [];
    snap.forEach( snapHijo =>{
        this.chats.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
    });
    console.log(this.chats);
  });
}






  getUsers(){
      this.usersDBRef.onSnapshot(  snap =>{
        this.users = [];
        snap.forEach( snapHijo =>{
            this.users.push({
                id: snapHijo.id,
                ...snapHijo.data()
            })
        });
        console.log(this.users);
      });
  }









  /*setLastHourForBets(){
    this.chatService.getUsers();

    this.chatService.getUsers().subscribe(message => {
      console.log(message);
    });
  }*/


  openUsersPage() {
    this.nav.navigateForward("/chat-users-list");
  }

  openChat(chat){
    console.log(chat);

    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify( {
                                    ID_Chat: chat.id
                                 } 
        )
      }
    };
    


   this.nav.navigateForward('/chat', navigationExtras);



    //this.nav.navigateForward("/chat");
  }
}
