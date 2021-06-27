import { Injectable } from '@angular/core';
import { UserModel } from '../models/users.model';

import { AuthService } from './auth.service';

import { Observable, Subject } from 'rxjs';
import { of } from 'rxjs';
import firebase from 'firebase';
//import { UserModel } from 'app/models/users.model';

const snapshotToArray = (snapshot: any) => {
  const returnArr = [];

  snapshot.forEach((childSnapshot: any) => {
      const item = childSnapshot.val();
      item.key = childSnapshot.key;
      returnArr.push(item);
  });

  return returnArr;
};
const snapshotToArray2 = (snapshot: any) => {
  const returnArr = [];

  snapshot.forEach((childSnapshot: any) => {
      const item = childSnapshot.val();
      /* item.key = childSnapshot.key; */
      returnArr.push(item);
  });

  return returnArr;
};

@Injectable({
  providedIn: 'root'
})



export class ChatService {
   
  private subject = new Subject<any>();
  public chatsUsers: any[] = [];

  usersDBRef:any;
  users: any[] = [];

  public myObservable$: Observable<any>;
/*  */
keymessage;
user2
/*  */

  constructor(private firebaseAuthService: AuthService) { 
    //this.usersDBRef = this.firebaseAuthService.firebaseDB.collection('users');



//    this.myObservable$ = this.usersDBRef.onSnapshot();

  //  console.log(this.myObservable$);
   }


 /*   postUser(user:UserModel){
      
      this.usersDBRef
      .add(Object.assign({}, user)).then(docRef=>{
          console.log(docRef);
      }).catch(e=> console.log("error: "+ e));
   } */

 /*getUsers(){
  this.usersDBRef.onSnapshot(  snap =>{
    snap.forEach( snapHijo =>{
        this.users.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
    });
  });
 }*/


  getUserChats(){

    return firebase.database().ref(this.firebaseAuthService.usersign.uid+'/members/');

    //return this.afDB.object('cliente/').valueChanges()

  }

  getChatsMembers(idchat){
    return firebase.database().ref(this.firebaseAuthService.usersign.uid+'/members/'+idchat);
  }

  getChats(){
    return firebase.database().ref(this.firebaseAuthService.usersign.uid+'/chats/');
  }

  getUser(uid){
    return firebase.database().ref('Users/'+uid);
  }

  getUsers(){
    return firebase.database().ref('Users/');
  }

  getRel(user,key){
     
    return firebase.database().ref('Relations/'+user.uid+'/'+key)
   }

   getChat2(user, userchat){

    return firebase.database().ref('Chats/Chats/'+user.uid).orderByValue().equalTo(userchat)

   }

/*   getChat(){
    return firebase.database().ref(this.firebaseAuthService.usersign.uid+'/members/');
  } */

  getChat(user, userchat){

    return firebase.database().ref('Chats/Chats/'+user.uid+'/'+userchat)

   }

 /*  getMessages(chatid){
    return firebase.database().ref(this.firebaseAuthService.usersign.uid+'/messages/'+chatid);
  } */

  getMessages(){
    return firebase.database().ref('Chats/Messages/'+this.keymessage)
   }

   addChat(user, userchat){
    //firebase.database().ref(user.uid+'/data/type').set(type);
    let chat = {
      name: 'single',
      timestamp: firebase.firestore.Timestamp.fromDate(new Date()),
      members: {
        user1: user.uid,
        user2: userchat.uid
      }

    }

    let key = firebase.database().ref('Chats/Chats/').push(chat).key
    firebase.database().ref('Chats/Chats/'+user.uid+'/'+key).set(userchat.uid)
    firebase.database().ref('Chats/Chats/'+userchat.uid+'/'+key).set(user.uid)
    this.keymessage = key;

    

   }

   addGroup(user,namegroup,usergroup){

    let users = [];
    users.push(user.uid)

    for(let j=0;j<usergroup.length;j++ ){
      users.push(usergroup[j].uid)

    }

    let chat = {
      name: namegroup,
      timestamp: firebase.firestore.Timestamp.fromDate(new Date()),
      members: {
        users: users        
      }

    }

    let key = firebase.database().ref('Chats/Chats/').push(chat).key

    for (let i=0; i<usergroup.length;i++){
      firebase.database().ref('Chats/Chats/'+user.uid+'/'+key).set(usergroup[i].uid)
      firebase.database().ref('Chats/Chats/'+usergroup[i].uid+'/'+key).set(user.uid)

    }


    this.keymessage = key;



   }

  newChat(user){

    //let key = this.afDB.list('/cliente/').push(cliente).key;

    let chat = {
      timestamp: new Date(),
      type: 'single'
    }

   

    

    let key  = firebase.database().ref(this.firebaseAuthService.usersign.uid+'/chats/').push(chat).key;
    firebase.database().ref(user.uid+'/chats/'+key).set(chat);        
    firebase.database().ref('/chats/'+key).set(chat);
    

    firebase.database().ref(this.firebaseAuthService.usersign.uid+'/members/'+key+'/'+user.uid).set('true');
    firebase.database().ref(this.firebaseAuthService.usersign.uid+'/members/'+key+'/'+this.firebaseAuthService.usersign.uid).set('true');
    

    firebase.database().ref(user.uid+'/members/'+key+'/'+user.uid).set('true');
    firebase.database().ref(user.uid+'/members/'+key+'/'+this.firebaseAuthService.usersign.uid).set('true');
    firebase.database().ref('/members/'+key+'/'+user.uid).set('true');
    firebase.database().ref('/members/'+key+'/'+this.firebaseAuthService.usersign.uid).set('true');

    return key;
  }

  newMessage(message){

    console.log(message);
    let user2 = JSON.parse(localStorage.getItem('user2'))

    firebase.database().ref(this.firebaseAuthService.usersign.uid+'/messages/'+localStorage.getItem('idchat')).push(message);
    firebase.database().ref(user2.uid+'/messages/'+localStorage.getItem('idchat')).push(message);
    firebase.database().ref('/messages/'+localStorage.getItem('idchat')).push(message);

    
  }
  sendMessage(message, user, userrec){
    let sendmessage = {
      message: message,
      timestamp: firebase.firestore.Timestamp.fromDate(new Date()),
      sender: user.uid

    }

    firebase.database().ref('Chats/Messages/'+this.keymessage).push(sendmessage)
    firebase.database().ref('Chats/Unread/'+userrec.uid+'/'+this.keymessage).push(sendmessage)
  }
  newMessageGroup(message, idchat){

    console.log(message);
    let user2 = JSON.parse(localStorage.getItem('user2'))

    firebase.database().ref(this.firebaseAuthService.usersign.uid+'/messages/'+localStorage.getItem('idchat')).push(message);
    firebase.database().ref('/messages/'+localStorage.getItem('idchat')).push(message);

    
    firebase.database().ref('/members/').orderByKey().equalTo(idchat).on('value',resp=>{
      let users = snapshotToArray2(resp)
      console.log(users);
      users.forEach(user=>{
        console.log(user);

        let keyusers = Object.keys(user).filter(key=>key != this.firebaseAuthService.usersign.uid && key != 'key')
        console.log(keyusers);
        keyusers.forEach(keyuser=>{
        firebase.database().ref(keyuser+'/messages/'+localStorage.getItem('idchat')).push(message);

        })
      })
    })


    

    
  }


  readChats(){

    let chatid = localStorage.getItem('idchat')

    firebase.database().ref(this.firebaseAuthService.usersign.uid+'/messages/'+chatid).once('value', resp=>{
      
      let messages = snapshotToArray(resp);
      console.log(messages);

      messages.forEach(message=>{
        if (message.sender!=this.firebaseAuthService.usersign.uid){
          firebase.database().ref(this.firebaseAuthService.usersign.uid+'/messages/'+chatid+'/'+message.key+'/read').set('true');
        }
      })

    });

  }

  stopread(){
    console.log('stop read');

    let chatid = localStorage.getItem('idchat')

    firebase.database().ref(this.firebaseAuthService.usersign.uid+'/messages/').off();

  }

  unreadChats(chatid){

    let count = 0;

    return firebase.database().ref(this.firebaseAuthService.usersign.uid+'/messages/'+chatid)
    
    
   /*  .on('value', resp=>{
      
      let messages = snapshotToArray(resp);
      console.log(messages);

      messages.forEach(message=>{
        if ((message.sender!=this.firebaseAuthService.usersign.uid) && (message.read=='false')){
          count = count + 1;
        }
      })

      
      console.log(count);
    }); */
 

  }

  newChatGroup(users){

    //let key = this.afDB.list('/cliente/').push(cliente).key;

    let chat = {
      timestamp: new Date(),
      type: 'group'
    }

    console.log(users);

    /* agregar al chat */
    

   

    

    let key  = firebase.database().ref(this.firebaseAuthService.usersign.uid+'/chats/').push(chat).key;            
    firebase.database().ref('/chats/'+key).set(chat);
    

    
    firebase.database().ref(this.firebaseAuthService.usersign.uid+'/members/'+key+'/'+this.firebaseAuthService.usersign.uid).set('true');
    firebase.database().ref('/members/'+key+'/'+this.firebaseAuthService.usersign.uid).set('true');
    
/* users */
users.forEach(user=>{

  firebase.database().ref(user.uid+'/members/'+key+'/'+user.uid).set('true');
  firebase.database().ref(user.uid+'/members/'+key+'/'+this.firebaseAuthService.usersign.uid).set('true');
  firebase.database().ref('/members/'+key+'/'+user.uid).set('true');


  firebase.database().ref(this.firebaseAuthService.usersign.uid+'/members/'+key+'/'+user.uid).set('true');

  firebase.database().ref(user.uid+'/chats/'+key).set(chat);
})

    return key;
  }

 /*  newChat2(user,idchat){

    //let key = this.afDB.list('/cliente/').push(cliente).key;

    let chat = {
      timestamp: new Date(),
      type: 'single'
    }

   

    console.log(user);

    let key  = idchat;
  
    

    return key;
  } */




       

/*  */

getUsersChat(user){
  return firebase.database().ref('Chats/Chats/'+user.uid)
 }

 getChatType(keychat){
  return firebase.database().ref('Chats/Chats/'+keychat)
 }









}





