import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NavController } from "@ionic/angular";
import { UserModel } from "src/app/models/users.model";
import { AuthService } from "src/app/services/auth.service";
import { ChatService } from "src/app/services/chat.service";


@Component({
  selector: "app-chat-list",
  templateUrl: "./chat-users-list.page.html",
  styleUrls: ["./chat-users-list.page.scss"],
})
export class ChatUsersListPage implements OnInit {
 
  user:UserModel;
  users: any[] = [];
  chats: any[] = [];

  usersDBRef:any;
  chatsDBRef:any;
  constructor(private nav: NavController,
              private router: Router,
              private firebaseAuthService: AuthService) {

    this.usersDBRef = this.firebaseAuthService.firebaseDB.collection('messages');          
}

  ngOnInit() {
    this.getUsers();
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
        console.log('Users: ', this.users);
      });
  }

  info(){
    this.firebaseAuthService.firebaseDB.collection('chats/y51aOtVCd4vdXgpnwsvV/messages').onSnapshot( snap=>{
      this.data = [];
      snap.forEach( snapHijo =>{
        
        console.log(snapHijo);
            this.data.push({
              id: snapHijo.id,
                ...snapHijo.data()
            })
        });
        console.log(this.data);
      
    })
  }


  openChat(item){
    console.log(item.id);

    
    /*this.chatsDBRef = this.firebaseAuthService.firebaseDB.collection('chats');    

    //Search for one Chat with the actual user

    
    this.chatsDBRef
      .where('users', 'array-contains', [item.id])
      .onSnapshot(  snap =>{
      this.chats = [];
      snap.forEach( snapHijo =>{
          this.chats.push({
              id: snapHijo.id,
              ...snapHijo.data()
          })
      });
      console.log('Chats: ', this.chats);
    });
*/
    


    //If exists open the chat

    //if doesn't exist create and open chat.





    this.nav.navigateForward("/chat");
  }

}
