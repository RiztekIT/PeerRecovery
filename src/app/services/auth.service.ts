import { Injectable } from '@angular/core';
import "firebase/auth";


import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import firebase from 'firebase';
import 'firebase/firestore';

//import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

const user = {
  Name: 'Pedroo',
  LastName: 'Floress',
  Salary: 3000,
  Active: false
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  firebaseConfig = {
    apiKey: "AIzaSyDpPLmgRkC8ublILfSGj8961ku-hyTpNvs",
    authDomain: "peerrecovery-app.firebaseapp.com",
    databaseURL: "https://peerrecovery-app-default-rtdb.firebaseio.com",
    projectId: "peerrecovery-app",
    storageBucket: "peerrecovery-app.appspot.com",
    messagingSenderId: "1014351207922",
    appId: "1:1014351207922:web:6d002db3f73a4587505f6b",
    measurementId: "G-222ERRG0EM"
};

  firebaseDB:any;
  menu: any;

  constructor(private router: Router)  {
    firebase.initializeApp(this.firebaseConfig);
    this.firebaseDB =  firebase.firestore();
    this.getCurrentUser()


   }

   updateLocation(lat,lng, user){
    let location = {
      lat : lat,
      lng: lng,
      timestamp: firebase.firestore.Timestamp.fromDate(new Date()),

    }

    firebase.database().ref('Tracking/'+user.uid+'/Current').set(location)
    firebase.database().ref('Tracking/'+user.uid+'/Historic').push(location)
  }

  sendLocaltion(current){

    firebase.database().ref('Tracking/Panic/'+current.user.uid).push(current);


  }







  user;
  usersign: any =[];
  registroUser(correo,pass){

    return  firebase.auth().createUserWithEmailAndPassword(correo, pass);
     
  /*   firebase.auth().createUserWithEmailAndPassword(correo, pass).then(resp=>{
      console.log(resp);
      
    }).catch((error) => {
      
      const errorCode = error.code;
      const errorMessage = error.message;

      if (errorCode == 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
      
    }); */
   }

   login(correo,pass){

    

    return firebase.auth().signInWithEmailAndPassword(correo,pass);

   /*  firebase.auth().signInWithEmailAndPassword(correo, pass).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
      // ...
    }); */
   }

   getCurrentUser(){
     if (JSON.parse(sessionStorage.getItem('user'))){

       this.usersign = JSON.parse(sessionStorage.getItem('user'));
     }
   }

   getUser(){
      
    firebase.auth().onAuthStateChanged((user)=>{
      console.log(user);
      this.user = user;
      if (user){
        console.log('Usuario Activo');
        this.router.navigate(['starter']);
      }else{
       console.log('Usuario NO Activo');
       
       this.router.navigate(['/']);

      }
    });
  }

  cerrarSession(){
    this.user = []
    return firebase.auth().signOut();
    /* firebase.auth().signOut().then(res=>{
      console.log(res);
      console.log(this.user)
      this.getUser();
    }); */
  }

  loginGoogle(){
    let provider = new firebase.auth.GoogleAuthProvider();

    
    /* return firebase.auth().signInWithPopup(provider); */
    return firebase.auth().signInWithRedirect(provider);
  /*   return firebase.auth().signInWithRedirect(provider).then(res=>{
      console.log(res);
      firebase.auth().getRedirectResult().then(function(result) {
        console.log(result);
        if (result.credential) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          let token = result.credential;
          // ...
          console.log(token);
        }
        // The signed-in user info.
         this.user = result.user;
         this.router.navigateByUrl('/home-results');
         
      })
    }); */
   }

   loginwithCredential(credential){
     return firebase.auth().signInWithCredential(credential)
   }

   obtenerToken(){
     
     return firebase.auth().getRedirectResult().then();
   }

 

   loginFacebook(){
    let provider = new firebase.auth.FacebookAuthProvider();
    console.log(provider);

    firebase.auth().signInWithRedirect(provider).then(res=>{
      console.log(res);
      firebase.auth().getRedirectResult().then((result) => {
        if (result.credential) {
          
          let token = result.credential;
          console.log(token);
          
        }
        
        this.user = result.user;
      }).catch(function(error) {
        
        let errorCode = error.code;
        let errorMessage = error.message;
        
        let email = error.email;
        
        let credential = error.credential;

        console.log(error);
      
        
      });

    });


   
   }

   obtenerUsuarioFB(){
    firebase.auth().getRedirectResult().then((result) => {
      if (result.credential) {
        
        let token = result.credential;
        console.log(token);
        
      }
      
      this.user = result.user;
    }).catch(function(error) {
      
      let errorCode = error.code;
      let errorMessage = error.message;
      
      let email = error.email;
      
      let credential = error.credential;

      console.log(error);
    
      
    }); 
   }


   resetPassword(correo){
     return firebase.auth().sendPasswordResetEmail(correo)
   }

   addUser(user){
     

    firebase.database().ref('Users/'+user.uid).set(user)

    firebase.database().ref(user.uid+'/data').set(user)

   }


   getMenu(user){
    //firebase.database().
    return firebase.database().ref(user.uid+'/menu')
  }
}
