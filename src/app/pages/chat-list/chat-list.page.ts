import { Component, OnInit } from "@angular/core";
import { NavigationExtras } from "@angular/router";
import { NavController } from "@ionic/angular";
import { UserModel } from "src/app/models/users.model";
import { AuthService } from "src/app/services/auth.service";
import { ChatService } from "src/app/services/chat.service";
//import { NavigationExtras } from '@angular/router';

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
  templateUrl: "./chat-list.page.html",
  styleUrls: ["./chat-list.page.scss"],
})
export class ChatListPage implements OnInit {
  

  user:UserModel;
  users: any[] = [];
  chats: any[] = [];
  keysUsers: any[] = [];
  



  usersDBRef:any;
  chatsDBRef:any;
  constructor(private nav: NavController,
              public chatService: ChatService,
              private firebaseAuthService: AuthService) {

    this.usersDBRef = this.firebaseAuthService.firebaseDB.collection('users');
    this.chatsDBRef = this.firebaseAuthService.firebaseDB.collection('chats');

}

  ngOnInit() {



    //this.user = new UserModel();
    //this.user.ID_User = 10;
    //this.user.Name = 'Alan Alexis';
    //this.user.LastName = 'Ramírez Lugo';
    //this.chatService.postUser(this.user);


    
    //this.getUsers();
    this.getChats();
  }
  


getChats(){
/*   this.chatsDBRef.onSnapshot(  snap =>{
    this.chats = [];
    snap.forEach( snapHijo =>{
        this.chats.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
    });
    console.log(this.chats);
  }); */
  

  this.chatService.getUserChats().orderByChild(this.firebaseAuthService.usersign.uid).equalTo('true').on('value', (resp:any) =>{
  let chats = snapshotToArray(resp);
  this.chats = [];
  this.keysUsers = []
  this.chatService.chatsUsers = []
  
   console.log(this.chats);

   chats.forEach(chat=>{
     console.log(Object.keys(chat))
     Object.keys(chat).forEach(key=>{
       if (key!='key' && key!=this.firebaseAuthService.usersign.uid){
         this.keysUsers.push(key)
         console.log(this.chatService.getUser(key).toJSON());
     
         this.chatService.getUser(key).on('value', (resp)=>{
           console.log(resp);
           let u = resp.val()
           
          /* let users = snapshotToArray(resp); */
          /* console.log(users); */
          console.log(chat);
          this.chatService.unreadChats(chat.key).on('value', resp=>{
      
            let messages = snapshotToArray(resp);
            console.log(messages);
            let count = 0;
            messages.forEach(message=>{
              if ((message.sender!=this.firebaseAuthService.usersign.uid) && (message.read=='false')){
                count = count + 1;
              }
            })
      
            
            console.log(count);
            
            u.unread = count;
          });
          this.chatService.chatsUsers.push(u)
         })

       }

     
       


     })


   })

/*    console.log(this.keysUsers);

   this.keysUsers.forEach(keyUser=>{

    console.log(this.chatService.getUser(keyUser).toJSON());
     
     this.chatService.getUser(keyUser).on('value', (resp)=>{
       console.log(resp);
       let u = resp.val()

       this.chatService.chatsUsers.push(u)
     })
   }) */

   console.log(this.chatService.chatsUsers);


  
  })


}






  getUsers(){
    /*   this.usersDBRef.onSnapshot(  snap =>{
        this.users = [];
        snap.forEach( snapHijo =>{
            this.users.push({
                id: snapHijo.id,
                ...snapHijo.data()
            })
        });
        console.log(this.users);
      }); */
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
/* 
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify( {
                                    ID_Chat: chat.id
                                 } 
        )
      }
    }; */
    this.chatService.getChat().orderByChild(chat.uid).equalTo('true').on('value', (resp:any) =>{
      console.log(resp);
      const chats = snapshotToArray(resp);
      console.log(chats);
      
        //this.nav.navigateForward("/chat");
        //this.nav.navigateForward("/chat?id="+chats[0].uid);
        localStorage.setItem('user2',JSON.stringify(chat))
        localStorage.setItem('idchat', chats[0].key)
        this.nav.navigateForward("/chat");
     
    })

   

   



    //this.nav.navigateForward("/chat");
  }
}
