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

@Injectable({
  providedIn: 'root'
})



export class ChatService {
   
  private subject = new Subject<any>();
  public chatsUsers: any[] = [];

  usersDBRef:any;
  users: any[] = [];

  public myObservable$: Observable<any>;

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

  getUser(uid){
    return firebase.database().ref('Users/'+uid);
  }

  getUsers(){
    return firebase.database().ref('Users/');
  }

  getChat(){
    return firebase.database().ref(this.firebaseAuthService.usersign.uid+'/members/');
  }

  getMessages(chatid){
    return firebase.database().ref(this.firebaseAuthService.usersign.uid+'/messages/'+chatid);
  }

  newChat(user){

    //let key = this.afDB.list('/cliente/').push(cliente).key;

    let chat = {
      timestamp: new Date(),
      type: 'single'
    }

   

    

    let key  = firebase.database().ref(this.firebaseAuthService.usersign.uid+'/chats/').push(chat).key;
    firebase.database().ref(user.uid+'/chats/'+key).push(chat);        
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


  readChats(){

    let chatid = localStorage.getItem('idchat')

    firebase.database().ref(this.firebaseAuthService.usersign.uid+'/messages/'+chatid).on('value', resp=>{
      
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

    let chatid = localStorage.getItem('idchat')

    firebase.database().ref(this.firebaseAuthService.usersign.uid+'/messages/'+chatid).off();

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




       











}





