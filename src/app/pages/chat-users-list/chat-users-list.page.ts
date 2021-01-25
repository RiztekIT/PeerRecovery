import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NavController } from "@ionic/angular";
import { UserModel } from "src/app/models/users.model";
import { AuthService } from "src/app/services/auth.service";
import { ChatService } from "src/app/services/chat.service";

export const snapshotToArray = (snapshot: any) => {
  const returnArr = [];

  snapshot.forEach((childSnapshot: any) => {
      const item = childSnapshot.val();
      item.key = childSnapshot.key;
      returnArr.push(item);
  });

  return returnArr;
};


@Component({
  selector: "app-chat-list",
  templateUrl: "./chat-users-list.page.html",
  styleUrls: ["./chat-users-list.page.scss"],
})
export class ChatUsersListPage implements OnInit {
 
  user:UserModel;
  users: any[] = [];
  data: any;
  chats: any[] = [];

  usersDBRef:any;
  chatsDBRef:any;
  constructor(private nav: NavController,
              private router: Router,
              private firebaseAuthService: AuthService,
              private chatService: ChatService) {

    this.usersDBRef = this.firebaseAuthService.firebaseDB.collection('messages');          
}

  ngOnInit() {
    this.getUsers();
  }
  
  getUsers(){
   /*  this.usersDBRef.onSnapshot(  snap =>{
        this.users = [];
        snap.forEach( snapHijo =>{
            this.users.push({
                id: snapHijo.id,
                ...snapHijo.data()
            })
        });
        console.log('Users: ', this.users);
      }); */
      this.chatService.getUsers().orderByChild('type').equalTo('User').on('value', (resp:any) =>{
        //console.log(resp);
         const users = snapshotToArray(resp);
        console.log(users);
        this.users = users;
        this.users = this.users.filter(x => x.uid != this.firebaseAuthService.usersign.uid);

       })



  }




  openChat(item){
    console.log(item.uid);

    

    this.chatService.getChat().orderByChild(item.uid).equalTo('true').on('value', (resp:any) =>{
      console.log(resp);
      const chats = snapshotToArray(resp);
      console.log(chats);
      if (chats.length>0){
        //this.nav.navigateForward("/chat");
        //this.nav.navigateForward("/chat?id="+chats[0].uid);
        localStorage.setItem('user2',JSON.stringify(item))
        localStorage.setItem('idchat', chats[0].key)
        this.nav.navigateForward("/chat");
      }else{
        localStorage.setItem('user2',JSON.stringify(item))
        let idchat = this.chatService.newChat(item);
        localStorage.setItem('idchat', idchat)
        this.nav.navigateForward("/chat");
      }
    })
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





    
  }

}
