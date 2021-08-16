import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import firebase from 'firebase';
import { UtilService } from '../../../services/util.service';

@Component({
  selector: 'app-addeditnotes',
  templateUrl: './addeditnotes.page.html',
  styleUrls: ['./addeditnotes.page.scss'],
})
export class AddeditnotesPage implements OnInit {

  data: any;
  edit = false;
  date: string;
  title: string = "";
  note: string = "";
  user;

  constructor(
    private router: Router,
    private route: ActivatedRoute, 
    public utilSVC: UtilService
  ) {
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.data = JSON.parse(params.special);
        this.edit = true;        
        this.getNote(this.data)
      }else{
        this.date = new Date().toString()
        
        this.edit = false;
      }
    });
   }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('user'));
  }

  getNote(note){
    console.log(note);
    let fecha = new Date()
    let hoy = new Date()

    
    fecha.setTime(note.timestamp.seconds*1000)


    let h = +fecha - +hoy

    console.log(fecha,'fecha');
    console.log(hoy,'hoy');

    console.log(h,'dif');
    
/*     fecha.setHours(fecha.getHours()-6)

   console.log(fecha);  
   console.log(fecha.toISOString().split('T')[1]);   */
   

    this.title = note.title;
    this.note = note.note;


    
    this.date = fecha.toString()
    
    console.log(this.date);
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

}
