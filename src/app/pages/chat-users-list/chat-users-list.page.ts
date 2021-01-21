import { Component, OnInit } from "@angular/core";
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
  data;

  usersDBRef:any;
  constructor(private nav: NavController,
              private chatService: ChatService,
              private firebaseAuthService: AuthService) {

    this.usersDBRef = this.firebaseAuthService.firebaseDB.collection('users');

}

  ngOnInit() {
    this.getUsers();
  }
  
  getUsers(){

    

    this.usersDBRef.orderBy("name", "asc").onSnapshot(  snap =>{
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


  openChat(){
    this.nav.navigateForward("/chat");
  }

}
