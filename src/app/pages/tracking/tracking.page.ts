import { UtilService } from "./../../services/util.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { mapStyle } from "src/environments/environment";
import { AuthService } from "src/app/services/auth.service";
import { AlertController } from "@ionic/angular";
import { TrackingService } from '../../services/tracking.service';
import { HTTP } from '@ionic-native/http/ngx';
import { Route, Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-tracking",
  templateUrl: "./tracking.page.html",
  styleUrls: ["./tracking.page.scss"],
})
export class TrackingPage implements OnInit {
  @ViewChild("search", { static: true }) search;
  zoom: number = 12;
  lat: number = 28.6532358;
  lng: number = -106.0991318;
  styles = mapStyle;
  markers: any = [
    
    {
      img: this.authSVC.usersign.photoURL,
      select: true,
      isOpen: true,
      lat: 28.6532358,
      lng: -106.0991318,
    },
    
  ];
  constructor(private util: UtilService,
    private alertController: AlertController,
    public authSVC: AuthService,    
    public trackingSVC: TrackingService,
    public http: HTTP,
    private route: ActivatedRoute, 
    ) {


      this.route.queryParams.subscribe(params => {
        if (params && params.data) {
          let data = JSON.parse(params.data);
          data = JSON.parse(data)
          this.parametros = true;
          
          this.lat = data.lat;
          this.lng = data.lng;
          console.log(data,'data');
          console.log(this.lat,'data');
          console.log(this.lng,'data');
        }
          
      });

    }


    locatio
    user;
    parametros = false;
    


  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('user'));
    if (!this.parametros){

      this.getLocationUser(this.user)
    }
  }

 /*  async onMarkerSelect(marker: any) {
    if (marker.isOpen) {
      await this.markers.forEach((element) => {
        element.select = false;
      });
      marker.select = await true;
    }
  } */


  
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      message: 'Do you want to share your courrent location?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Share!',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  getLocationUser(user){
 /*    this.gps = false;
    this.disabled = false; */
    this.trackingSVC.getLocation(user).once('value').then(resp=>{
      console.log(resp.val());
      let lat = resp.val().lat;
      let long = resp.val().lng;

      this.lat = lat;
      this.lng = long
      this.getLocation(lat,long);
    /*   let pos : point = {
        lat: lat,
        lng: long
      }


      this.points.push(pos); */
   /*    this.userlat = lat;
      this.userlng = long;

      this.currentPos.lat = lat;
      this.currentPos.lng = long */


    /*   if (this.points.length>1){
        this.points[1] = pos;

      }else if (this.points.length==1){
        this.points.push(pos);

      }else{
        
        this.points.push(pos);
      } */
  
    /*   const TU_LLAVE = 'AIzaSyDpPLmgRkC8ublILfSGj8961ku-hyTpNvs';
    this.http.get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${TU_LLAVE}`       
     ).subscribe((e:any) => {
       
         console.log(e);
         //Swal.close();
         
       
     }); */
    })

  }


  getLocation(lat,long){
    /*  const lat = 45.45121212;
     const long = 45.451564; */
     const TU_LLAVE = 'AIzaSyDpPLmgRkC8ublILfSGj8961ku-hyTpNvs';
     this.http.get(
       `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${TU_LLAVE}`,{},{}
      ).then(data=>{
        let l = JSON.parse(data.data)
        this.locatio = l.results[0].formatted_address
        /* this.backgroundGeolocation.finish();  */
      })
   }
   
  
}

