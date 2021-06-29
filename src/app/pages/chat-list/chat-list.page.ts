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
export const snapshotToArray2 = (snapshot: any) => {
  const returnArr = [];

  snapshot.forEach((childSnapshot: any) => {
      const item = childSnapshot.val();
      //item.key = childSnapshot.key;
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

  /*  */
  Users: any[] = [];
  group = false;
  messages: any[] = [];
  /*  */
  

  user:UserModel;
  users: any[] = [];
  chats: any[] = [];
  keysUsers: any[] = [];
  



  usersDBRef:any;
  chatsDBRef:any;
  constructor(private nav: NavController,
              public chatService: ChatService,
              private firebaseAuthService: AuthService) {

    //this.usersDBRef = this.firebaseAuthService.firebaseDB.collection('users');
    //this.chatsDBRef = this.firebaseAuthService.firebaseDB.collection('chats');

}

  ngOnInit() {



    //this.user = new UserModel();
    //this.user.ID_User = 10;
    //this.user.Name = 'Alan Alexis';
    //this.user.LastName = 'Ramírez Lugo';
    //this.chatService.postUser(this.user);


    
    //this.getUsers();
    //this.getChats2();
    this.user = JSON.parse(sessionStorage.getItem('user'));
    this.getUsersChat()
  }
  
// getChats2(){
//   this.chatService.getChats().on('value',resp=>{
//   this.chatService.chatsUsers = [];
//   let chats = snapshotToArray(resp);
//   console.log(chats);
//   chats.forEach(chat=>{
//     if (chat.type=='single'){
//       this.chatService.getChatsMembers(chat.key).on('value', res=>{
//         let users = res.val()
//         console.log(users);
        
//           console.log(Object.keys(users));
//           let user = Object.keys(users).filter(user => user != this.firebaseAuthService.usersign.uid)
//           let key = user[0]
//           console.log(key);



//           this.chatService.getUser(key).on('value', (resp)=>{
//             console.log(resp);
//             let u = resp.val()
   
//            console.log(u);
//            this.chatService.unreadChats(chat.key).on('value', resp=>{
       
//              let messages = snapshotToArray(resp);
//              console.log(messages);
//              let count = 0;
//              messages.forEach(message=>{
//                if ((message.sender!=this.firebaseAuthService.usersign.uid) && (message.read=='false')){
//                  count = count + 1;
//                }
//              })
       
             
//              console.log(count);
             
//              u.unread = count;
//            });
//            this.chatService.chatsUsers.push(u)
//           })                
//       })
//     }else if (chat.type=='group'){
//       let groupinfo={
//         displayName: 'chatGroup',
//         photoUrl: 'https://lh3.googleusercontent.com/-oHdxefwfte4/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckFwmGRYKK_yKebGqxAIor7JTeCLg/s96-c/photo.jpg',
//         uid:chat.key
//       }

//       this.chatService.chatsUsers.push(groupinfo)

//     }
//   })
// })



// /* 
//   this.chatService.getChats().on('value', (resp:any)=>{
    
//     let chats = snapshotToArray(resp);
//     console.log(chats);

//     chats.forEach(chat=>{
//       this.chatService.getChatsMembers(chat.key).on('value', (res:any)=>{
        
//         let usersChat = res.val()
//         console.log(Object.keys(usersChat));

//         if (Object.keys(usersChat).length==2){

//           Object.keys(usersChat).forEach(key=>{
//             console.log(key);
//             if (key!='key' && key!=this.firebaseAuthService.usersign.uid){
//               this.keysUsers.push(key)
//               console.log(this.chatService.getUser(key).toJSON());
          
//               this.chatService.getUser(key).on('value', (resp)=>{
//                 console.log(resp);
//                 let u = resp.val()
       
//                console.log(u);
//                this.chatService.unreadChats(chat.key).on('value', resp=>{
           
//                  let messages = snapshotToArray(resp);
//                  console.log(messages);
//                  let count = 0;
//                  messages.forEach(message=>{
//                    if ((message.sender!=this.firebaseAuthService.usersign.uid) && (message.read=='false')){
//                      count = count + 1;
//                    }
//                  })
           
                 
//                  console.log(count);
                 
//                  u.unread = count;
//                });
//                this.chatService.chatsUsers.push(u)
//               })
     
//             }
//           })

//         }else if (Object.keys(usersChat).length>2){

//           let groupinfo={
//             displayName: 'chatGroup',
//             photoUrl: 'https://lh3.googleusercontent.com/-oHdxefwfte4/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckFwmGRYKK_yKebGqxAIor7JTeCLg/s96-c/photo.jpg',
//             uid:chat.key
//           }

//           this.chatService.chatsUsers.push(groupinfo)

//         }
        
   
//       })
//     })

//   }) */
// }

// getChats(){
// /*   this.chatsDBRef.onSnapshot(  snap =>{
//     this.chats = [];
//     snap.forEach( snapHijo =>{
//         this.chats.push({
//             id: snapHijo.id,
//             ...snapHijo.data()
//         })
//     });
//     console.log(this.chats);
//   }); */
  

//   this.chatService.getUserChats().orderByChild(this.firebaseAuthService.usersign.uid).equalTo('true').on('value', (resp:any) =>{
//   let chats = snapshotToArray(resp);
//   this.chats = [];
//   this.keysUsers = []
//   this.chatService.chatsUsers = []
  
//    console.log(this.chats);

//    chats.forEach(chat=>{
//      console.log(Object.keys(chat))
//      Object.keys(chat).forEach(key=>{
//        if (key!='key' && key!=this.firebaseAuthService.usersign.uid){
//          this.keysUsers.push(key)
//          console.log(this.chatService.getUser(key).toJSON());
     
//          this.chatService.getUser(key).on('value', (resp)=>{
//            console.log(resp);
//            let u = resp.val()
           
//           /* let users = snapshotToArray(resp); */
//           /* console.log(users); */
//           console.log(chat);
//           this.chatService.unreadChats(chat.key).on('value', resp=>{
      
//             let messages = snapshotToArray(resp);
//             console.log(messages);
//             let count = 0;
//             messages.forEach(message=>{
//               if ((message.sender!=this.firebaseAuthService.usersign.uid) && (message.read=='false')){
//                 count = count + 1;
//               }
//             })
      
            
//             console.log(count);
            
//             u.unread = count;
//           });
//           this.chatService.chatsUsers.push(u)
//          })

//        }

     
       


//      })


//    })

// /*    console.log(this.keysUsers);

//    this.keysUsers.forEach(keyUser=>{

//     console.log(this.chatService.getUser(keyUser).toJSON());
     
//      this.chatService.getUser(keyUser).on('value', (resp)=>{
//        console.log(resp);
//        let u = resp.val()

//        this.chatService.chatsUsers.push(u)
//      })
//    }) */

//    console.log(this.chatService.chatsUsers);


  
//   })


// }






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

  openChat(event){
   /*  console.log(chat);
    if (chat.displayName!='chatGroup'){

      this.chatService.getChat().orderByChild(chat.uid).equalTo('true').on('value', (resp:any) =>{
        console.log(resp);
        const chats = snapshotToArray(resp);
        console.log(chats);
        
   
          localStorage.setItem('user2',JSON.stringify(chat))
          localStorage.setItem('idchat', chats[0].key)
          this.nav.navigateForward("/chat");
       
      })
    }else{

  
  
      localStorage.setItem('users2',JSON.stringify(chat))
      
      localStorage.setItem('idchat', chat.uid)
      this.nav.navigateForward("/chat");
    } */

   console.log(event,'chat');

   if (event.type=='User'){
    this.group=false;
    
  }else{
    this.group=true;
    
    
    
    
  }

  this.chatService.getChat(this.user, event.chatuid).once('value', resp=>{
    console.log(resp.val());

    if (resp.val()){
      this.chatService.keymessage = event.chatuid;
      this.chatService.user2 = event
      //this.getMessages()
      event.unread = 0;
      this.nav.navigateForward("/chat2");
      

    }else{
      this.nav.navigateForward("/chat2");
    }
    /* else{
      this.chatSVC.addChat(this.user,event )
      this.getMessages()
    } */
    /* this.scrollToBottom(); */
  })

   



    
  }




  /*  */
  getUsersChat(){
    console.log('buscando chats');

    this.Users = [];

    this.chatService.getUsersChat(this.user).on('value', resp=>{
    if(resp.val()){

  
      this.Users = [];
      let keys = Object.keys(resp.val())
      console.log(keys);

      resp.forEach((childSnapshot: any) => {
        console.log(childSnapshot.val());
        console.log(childSnapshot.key);
        let keychat = childSnapshot.key
        /* keychat.key = childSnapshot.key */
        this.chatService.getChatType(keychat).on('value', res=>{
          console.log(res.val());
          let chat = res.val()
          chat.key = childSnapshot.val()
          console.log(chat.key);
          if (chat.name=='single'){
            this.chatService.getUser(chat.key).on('value', resp=>{          
              let item = resp.val();
              item.unread = 0;
              item.chatuid = keychat
              this.chatService.unreadChats(this.user.uid,keychat).on('value', unread=>{
                let count = 0;
                console.log(unread.val(),'UNREAD');
                unread.forEach(u=>{
                  count = count + 1
                })
                console.log(count,'UNREAD2');

                item.unread = count;
              })
             
              this.Users.push(item)
             })


          }else{
            let item2 = res.val();
            let item  = res.val();
            console.log(item2);
            item.displayName = item2.name;
            item.photoUrl = 'https://lh3.googleusercontent.com/-oHdxefwfte4/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckFwmGRYKK_yKebGqxAIor7JTeCLg/s96-c/photo.jpg',
            item.unread = 0;
            item.chatuid = keychat
            this.Users.push(item)

            /* SI ES GRUPO */
          }
        })
      })
  

    }

          
    })

  }


  getMessages(){
    
    this.chatService.getMessages().on('value', resp=>{
      this.messages = [];
      
      resp.forEach((childSnapshot: any) =>{
        let m = childSnapshot.val();
        console.log(childSnapshot.val());

        this.chatService.getUser(m.sender).on('value', resp=>{
          /* console.log(resp.val()); */
          m.senderuser = resp.val();
          
          
          
          this.messages.push(m);
         })


        
        
        
        //this.scrollToBottom()
        
      })

      console.log(this.messages);

    })
  }




}
