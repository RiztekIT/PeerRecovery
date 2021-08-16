import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { UtilService } from '../../services/util.service';
import firebase from 'firebase';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {

  title: string = "";
  note: string = "";
  user;
  notes: any[] = [];

  constructor(
    public utilSVC:UtilService,
    private router: Router,
    ) { }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('user'));
    this.getNotes()
  }

  getNotes(){
    this.utilSVC.getNotes(this.user.uid).on('value', resp=>{
      this.notes = []
      
      console.log(resp.val());

      resp.forEach((childSnapshot: any) =>{
        let item = childSnapshot.val()
        item.appkey = childSnapshot.key;

        this.notes.push(item)
              
      })

      

    })
  }

  addNotes(){
    let note = {
      timestamp: firebase.firestore.Timestamp.fromDate(new Date()),      
      title: this.title,
      note: this.note,
      user: this.user.uid,      
    }

    console.log(note);
    this.utilSVC.addNote(note)

    this.router.navigate(['notes']);
  }

  editNote(){
    let note;

    note = {
      timestamp: firebase.firestore.Timestamp.fromDate(new Date()),      
      title: this.title,
      note: this.note,
      user: this.user.uid,  
    }

    console.log(note);
    this.utilSVC.editNote(note)
    this.router.navigate(['notes']);
  }

  delete(item){

    this.utilSVC.deleteNote(item)



  }

  openNote(item){

    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(item)
      }
    };
    this.router.navigate(['addeditnotes'], navigationExtras);

  }

  

}
