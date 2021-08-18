import { Injectable } from '@angular/core';
import { NavController, MenuController, ModalController, PopoverController } from '@ionic/angular';
import firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public modalCtrl: ModalController,
    public popoverCtrl: PopoverController,
  ) { }

  getNotes(user){

    return firebase.database().ref('Notes/Users/'+user)

  }

  addNote(note){

    console.log(note);

    let key = firebase.database().ref('Notes/Notes').push(note).key
    firebase.database().ref('Notes/Users/'+note.user+'/'+key).set(note)

  }

  editNote(note){

    //console.log(app);

    firebase.database().ref('Notes/Notes/'+note.appkey+'/').set(note)
    firebase.database().ref('Notes/Users/'+note.user+'/'+note.appkey).set(note)

  }

  deleteNote(note){
    firebase.database().ref('Notes/Notes/'+note.appkey+'/').remove()
    firebase.database().ref('Notes/Users/'+note.user+'/'+note.appkey).remove()

  }

  setEmotion(emotion){

    //let key = firebase.database().ref('Emotion/Emotion').push(emotion).key
    firebase.database().ref('Emotion/Users/'+emotion.user).set(emotion)
    

  }

  getEmotion(user){

    return firebase.database().ref('Emotion/Users/'+user)

  }

  getPDF(){
    let storage = firebase.storage();
    let pathReference = storage.ref('Resources/resource-dir.pdf');

    return pathReference;
  }

  

}
