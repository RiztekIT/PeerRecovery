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
 
  user;
  /* users: any[] = []; */
  //data: any;
  chats: any[] = [];
  group = false;
  groupusers: any[] = [];

  usersDBRef:any;
  chatsDBRef:any;
  constructor(private nav: NavController,
              private router: Router,
              private firebaseAuthService: AuthService,
              private chatService: ChatService) {

    this.usersDBRef = this.firebaseAuthService.firebaseDB.collection('messages');          
}

Users: any[] = [];
namegroup


  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('user'));
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
   /*    this.chatService.getUsers().orderByChild('type').equalTo('User').on('value', (resp:any) =>{
        
         const users = snapshotToArray(resp);
        console.log(users);
        this.users = users;
        this.users = this.users.filter(x => x.uid != this.firebaseAuthService.usersign.uid);

       }) */
       console.log(this.user);
       this.chatService.getUsers().on('value', resp=>{
         this.Users  = [];
         let c = 0;
         resp.forEach((childSnapshot: any) => {
             const item = childSnapshot.val();
             item.key = childSnapshot.key;
             /* item.selected = true; */
             if (item.key!=this.user.uid){
               console.log(item);
               console.log(this.user);
               this.chatService.getRel(this.user,item.key).once('value', (resp: any) =>{
                 console.log(resp);
                 console.log(resp.val());
           
                 item.selected = resp.val();
                 if (resp.val()){
   
                   this.Users.push(item);
                 }
      
               })
               
   
             }
         });
         //this.selected = this.Users
         console.log(this.Users);
         
   
       })



  }




  openChat(item){

    if (!this.group){


    console.log(item.uid);

    this.chatService.getChat2(this.user, item.uid).on('value', resp=>{
      console.log(resp.val());
      console.log(resp.key);
      
      if (resp.val()){
        let keys = Object.keys(resp.val())
        this.chatService.keymessage = keys[0];        
        this.chatService.user2 = item
        //this.getMessages()
        this.nav.navigateForward("/chat2");
        //this.getMessages()
        

      }else{
        this.chatService.addChat(this.user,item )
        //this.chatService.keymessage = keys[0];        
        this.chatService.user2 = item
        this.nav.navigateForward("/chat2");
      }

      
    })

    

   /*  this.chatService.getChat().orderByChild(item.uid).equalTo('true').once('value', (resp: any) =>{
      console.log(resp);
      const chats = snapshotToArray(resp);
      console.log(chats);
      if (chats.length>0){

       chats.forEach(chat=>{

         console.log(chat);
         let users = Object.keys(chat).filter(user => user != this.firebaseAuthService.usersign.uid && user != 'key')
         console.log(users);
         if (users.length==1){

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

      
      }else{
        localStorage.setItem('user2',JSON.stringify(item))
        let idchat = this.chatService.newChat(item);
        localStorage.setItem('idchat', idchat)
        this.nav.navigateForward("/chat");
      }
    }) */
  
  }
  }

  openChatGroup(){
    console.log(this.Users);
    this.groupusers = this.Users.filter(x => x.isChecked != false && x.isChecked);
    console.log(this.groupusers);
    this.chatService.addGroup(this.user,this.namegroup,this.groupusers)
    this.nav.navigateForward("/chat2");
  /*   this.groupusers = this.Users.filter(x => x.isChecked != false && x.isChecked);
    console.log(this.groupusers);
    let group = {
      displayName: 'chatGroup'
    }


    localStorage.setItem('users2',JSON.stringify(group))
    let idchat = this.chatService.newChatGroup(this.groupusers);
    localStorage.setItem('idchat', idchat)
    this.nav.navigateForward("/chat"); */

  }

 /*  check(user){
    console.log(user);

  } */

}
