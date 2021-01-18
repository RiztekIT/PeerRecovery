import { Injectable } from '@angular/core';
import { UserModel } from '../models/users.model';

import { AuthService } from './auth.service';

import { Observable, Subject } from 'rxjs';
import { of } from 'rxjs';
//import { UserModel } from 'app/models/users.model'; 

@Injectable({
  providedIn: 'root'
})
export class ChatService {
   
  private subject = new Subject<any>();

  usersDBRef:any;
  users: any[] = [];

  public myObservable$: Observable<any>;

  constructor(private firebaseAuthService: AuthService) { 
    this.usersDBRef = this.firebaseAuthService.firebaseDB.collection('users');



    this.myObservable$ = this.usersDBRef.onSnapshot();

    console.log(this.myObservable$);
   }


   postUser(user:UserModel){
      /** INSERTAR  */
      this.usersDBRef
      .add(Object.assign({}, user)).then(docRef=>{
          console.log(docRef);
      }).catch(e=> console.log("error: "+ e));
   }

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


  




       











}





