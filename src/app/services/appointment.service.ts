import { Injectable } from '@angular/core';
import { UserModel } from '../models/users.model';

import { AuthService } from './auth.service';

import { Observable, Subject } from 'rxjs';
import { of } from 'rxjs';
import firebase from 'firebase';

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



export class AppointmentService {
   
  private subject = new Subject<any>();
  public chatsUsers: any[] = [];

  usersDBRef:any;
  users: any[] = [];

  public myObservable$: Observable<any>;

  constructor(private firebaseAuthService: AuthService) {   
    console.log(this.myObservable$);
   }


   getAppointment(appointmentID){
    return firebase.database().ref('Appointments').child(appointmentID);
    
   }


   updateAppointment(appointmentObj){
      return firebase.database()
      .ref('Appointments')
      .child(appointmentObj.appointmentID)
      .update(appointmentObj);
   }

   getAppointments(){
    return firebase.database()
    .ref('Appointments/')
    .orderByChild("userID")
    .equalTo(this.firebaseAuthService.usersign.uid);
   }


  postAppointment(appointmentObj){
    var key = this.firebaseAuthService.usersign.uid + "_" + Date.now();
    firebase.database().ref('/Appointments/' + key).set(appointmentObj);
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











}





