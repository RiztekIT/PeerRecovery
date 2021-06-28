import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class VideocallService {

  constructor(private storage: AngularFireStorage) { }

  keycall;


    
  getUsers(){
    return firebase.database().ref('Users')
   }

   getRel(user,key){
     
    return firebase.database().ref('Relations/'+user.uid+'/'+key)
   }


   newcall(user, usercall){
     
     
     let video = {     
      timestamp: firebase.firestore.Timestamp.fromDate(new Date()),
      channel: '',
      state: true

     }

    
   

    

    let key = firebase.database().ref('VideosCall/VideosCall/').push(video).key
    video.channel = key
    firebase.database().ref('VideosCall/VideosCall/'+key).set(video)
    firebase.database().ref('VideosCall/VideosCall/'+key+'/Members/'+user.uid).set(true)
    firebase.database().ref('VideosCall/VideosCall/'+key+'/Members/'+usercall.uid).set(false)
    firebase.database().ref('VideosCall/VideosCall/'+user.uid+'/'+key).set(usercall.uid)
    firebase.database().ref('VideosCall/VideosCall/'+usercall.uid+'/'+key).set(user.uid)
    this.keycall = key;
   }

   getCall(key){
    return firebase.database().ref('VideosCall/VideosCall/'+key)
   }


   hangup(user,key){
    firebase.database().ref('VideosCall/VideosCall/'+key+'/Members/'+user.uid).set(false)
    firebase.database().ref('VideosCall/VideosCall/'+key+'/state').set(false)
     

   }
   reconnect(user,key){
    firebase.database().ref('VideosCall/VideosCall/'+key+'/Members/'+user.uid).set(true)
    firebase.database().ref('VideosCall/VideosCall/'+key+'/state').set(true)
     

   }

   answerccall(user,key){

    firebase.database().ref('VideosCall/VideosCall/'+key+'/Members/'+user.uid).set(true)

   }

   getCalls(user){
    return firebase.database().ref('VideosCall/VideosCall/'+user.uid)
   }

   getUser(key){
    return firebase.database().ref('Users/'+key)
   }

   downloadvideo(key){

    let storage = firebase.storage();
    let pathReference = storage.ref('Videos/'+key);

    return pathReference;
    
    

   }


   tareaCloudStorage(nombreArchivo: string, datos: any) {
    return this.storage.upload('Videos/'+nombreArchivo, datos);
  }

  

/*    downloadfile(url){
    
     return this.http.get(url,{responseType: 'blob'})
   } */
}
