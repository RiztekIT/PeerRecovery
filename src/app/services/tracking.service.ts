import { Injectable } from '@angular/core';
import firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class TrackingService {

  constructor() { }

  panicselectUser;

  updateLocation(lat,lng, user){
    let location = {
      lat : lat,
      lng: lng,
      timestamp: firebase.firestore.Timestamp.fromDate(new Date()),

    }

    firebase.database().ref('Tracking/'+user.uid+'/Current').set(location)
    firebase.database().ref('Tracking/'+user.uid+'/Historic').push(location)
  }

  getLocation(user){
    return firebase.database().ref('Tracking/'+user.uid+'/Current')
  }


  getHistoric(user){
    return firebase.database().ref('Tracking/'+user.uid+'/Historic')

  }

  getUser(uid){
    return firebase.database().ref('Users/'+uid);
  }
  
  getPanic(uid){
    return firebase.database().ref('Tracking/Panic/'+uid);
    
  }

  getUsers(){
    return firebase.database().ref('Users')
   }

   getRel(user,key){
     
    return firebase.database().ref('Relations/'+user.uid+'/'+key)
   }

 

/*   tareaCloudStorage(nombreArchivo: string, datos: any) {
    return this.storage.upload('Videos/'+nombreArchivo, datos);
  } */
}
