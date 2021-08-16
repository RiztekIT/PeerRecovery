import { Injectable } from '@angular/core';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  getProfileDS(user){

    return firebase.database().ref('Profile/DataSheet/Users/'+user)

  }

  addProfileDS(ds){

    console.log(ds);

    let key = firebase.database().ref('Profile/DataSheet/DataSheet').push(ds).key
    firebase.database().ref('Profile/DataSheet/Users/'+ds.user+'/'+key).set(ds)

  }

  editProfileDS(ds){

    //console.log(app);

    firebase.database().ref('Profile/DataSheet/DataSheet/'+ds.appkey+'/').set(ds)
    firebase.database().ref('Profile/DataSheet/Users/'+ds.user+'/'+ds.appkey).set(ds)

  }
}
