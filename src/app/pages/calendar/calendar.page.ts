import { Component, OnInit, SecurityContext } from "@angular/core";
import { Router } from "@angular/router";
import { AlertController, ModalController, NavController } from "@ionic/angular";
import { NavigationExtras } from '@angular/router';
import { AppointmentPageModule } from "../appointment/appointment.module";
import { AuthService } from "src/app/services/auth.service";
import { AppointmentService } from "src/app/services/appointment.service";
import firebase from 'firebase';
import { Zoom } from "@ionic-native/zoom/ngx";
import { DomSanitizer } from "@angular/platform-browser";
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import {InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';




@Component({
  selector: "app-calendar",
  templateUrl: "./calendar.page.html",
  styleUrls: ["./calendar.page.scss"],
})
export class CalendarPage implements OnInit {

  options : InAppBrowserOptions = {
    location : 'yes',//Or 'no' 
    hidden : 'no', //Or  'yes'
    clearcache : 'yes',
    clearsessioncache : 'yes',
    zoom : 'yes',//Android only ,shows browser zoom controls 
    hardwareback : 'yes',
    mediaPlaybackRequiresUserAction : 'no',
    shouldPauseOnSuspend : 'no', //Android only 
    closebuttoncaption : 'Close', //iOS only
    disallowoverscroll : 'no', //iOS only 
    toolbar : 'yes', //iOS only 
    enableViewportScale : 'no', //iOS only 
    allowInlineMediaPlayback : 'no',//iOS only 
    presentationstyle : 'pagesheet',//iOS only 
    fullscreen : 'yes',//Windows only    
  };
  
  appointmentsDBRef:any;
  Appointments: any[] = [];
  totalAppointments = 0;
  constructor(private alertController: AlertController,
              private nav: NavController,
              private router: Router,
              private modalCtr: ModalController,
              private firebaseAuthService: AuthService,
              public appointmentService: AppointmentService,
              private zoomService: Zoom,
              private sanitizer:DomSanitizer,
              //private iab: InAppBrowser
              private iab: InAppBrowser
              
              ) {


/*     this.appointmentsDBRef = this.firebaseAuthService.firebaseDB.collection('Appointments');
                this.getAppointments(); */

              }
              apps: any[] = [];
              user;
              color;

              all = true;
              dates = false;

              startDate : Date;
  endDate: Date;
  startDateS;
  endDateS;

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('user'));
    this.startDate = new Date()
    this.endDate = new Date()

    this.getAppointments();    
  }
  /*async presentAlertRadio() {
    const alert = await this.alertController.create({
      header: "Set Doctor",
      inputs: [
        {
          name: "Kirakwall",
          type: "radio",
          label: "Kirakwall",
          value: "Kirakwall",
          checked: true,
        },
        {
          name: "Kirakwall2",
          type: "radio",
          label: "Kirakwall2",
          value: "Kirakwall2",
        },
        {
          name: "Kirakwall3",
          type: "radio",
          label: "Kirakwall3",
          value: "Kirakwall3",
        },
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: () => {},
        },
        {
          text: "Ok",
          handler: (data) => {
            this.selectedLocation = data;
          },
        },
      ],
    });

    await alert.present();
  }*/

  getStyle(item){
    let color;

    let hoy = new Date();

    let fecha = new Date()

    fecha.setTime(item.appointmentdate.seconds*1000)

    let h = +fecha - +hoy

    h = h / 86400000

    if (h<0){

      color = {
        'background-color' : '#ff3333'
      }
      return color
      
    }else if (h<1){

      color = {
        'background-color' : '#ffb3b3'
      }
      return color
      
    }else if(h<3){
      color = {
        'background-color' : '#ffff99'
      }
      return color

    }else{

      color = {
        'background-color' : '#66ff66'
      }
      return color

    }








  

  }

  allChange(){
    this.getAppointments();
 /*    if (!this.all){
      console.log(this.all,'all');

      this.apps.filter(app => app.done == 'false')
    }

    console.log(this.apps); */

    

  }

  getAppointments(){
  /*   this.appointmentService.getAppointments().on('value', resp=>{
      this.Appointments  = [];
      resp.forEach((childSnapshot: any) => {
          const item = childSnapshot.val();
          item.key = childSnapshot.key;
          this.Appointments.push(item);
      });
      console.log(resp);
      console.log(this.Appointments);
    }) */

    
    this.appointmentService.getApps(this.user.uid).on('value', resp=>{
      this.apps = []
      
      console.log(resp.val());

      resp.forEach((childSnapshot: any) =>{
        let item = childSnapshot.val()
        item.appkey = childSnapshot.key;
        if (this.all){

          if (this.dates){
            if ((item.appointmentdate.seconds*1000>=this.startDateS.getTime()) && (item.appointmentdate.seconds*1000<=this.endDateS.getTime())) {

              this.apps.push(item) 
    
            }

          }else{

            this.apps.push(item)        
          }

          
          
        }else{
          if (!item.done){
            if (this.dates){
              if ((item.appointmentdate.seconds*1000>=this.startDateS.getTime()) && (item.appointmentdate.seconds*1000<=this.endDateS.getTime())) {
  
                this.apps.push(item) 
      
              }
  
            }else{
  
              this.apps.push(item)        
            }      
            
          }
        }
              
      })

      this.totalAppointments = this.apps.length;

    })
    
    }



  openAppointmentPage(item) {
   /*  let appointment = {
      appointmentID: item.key,
    }; */
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(item)
      }
    };
    this.router.navigate(['appointment'], navigationExtras);
    

  }

  newAppointmentPage(){
    this.router.navigate(['appointment']);
  }

  searchDates(){


    this.dates = !this.dates
    this.startDate = new Date()
    this.endDate = new Date()
    console.log(this.dates);

  }

  changeDates(){

    console.log(this.startDate);
    console.log(this.endDate);
    
    
    this.startDateS = new Date(this.startDate)
    this.endDateS = new Date(this.endDate)
    console.log(this.startDateS);
    console.log(this.endDateS);

    if (this.startDateS<this.endDateS){
      this.getAppointments();
}

    //this.getAppointments();

  }


  openlink(item){

    
/* 
    const url = item.link;

    const link = document.createElement('a');
    link.href = url;
    link.target = '_system'    
    link.click(); */

    let url  = this.sanitizer.bypassSecurityTrustUrl(item.link);

    let url2 = this.sanitizer.sanitize(SecurityContext.URL,url)

    //this.pdfSrc = this.sanitizer.sanitize(SecurityContext.RESOURCE_URL, this.sanitizer.bypassSecurityTrustResourceUrl(url));


    //window.open(url2,'_system')
   
    
    this.iab.create(item.link,'_system',this.options).show();
    //this.iab.open(item.link,'_system')

   
    

    
    


    

    

  }

 /*  sanitize(url:string){
    return this.sanitizer.bypassSecurityTrustUrl(url);
} */



}
