import { UtilService } from "./../../services/util.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { mapStyle } from "src/environments/environment";
import { AuthService } from "src/app/services/auth.service";
import { AlertController } from "@ionic/angular";
import { TrackingService } from '../../services/tracking.service';
import { HTTP } from '@ionic-native/http/ngx';
import { Route, Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment,
  MyLocation,
  GoogleMapsAnimation,
  ILatLng
} from '@ionic-native/google-maps';
import {
  ToastController,
  Platform,
  LoadingController
} from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { PanicsPage } from './panics/panics.page';


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
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public modalController: ModalController,
    private router: Router,
    ) {


      this.route.queryParams.subscribe(params => {
        if (params && params.data) {
          let data = JSON.parse(params.data);
          data = JSON.parse(data)
          this.parametros = true;
          
          this.lat = data.lat;
          this.lng = data.lng;
          this.userpanic = data.user;
          console.log(data,'data');
          console.log(this.lat,'data');
          console.log(this.lng,'data');
          this.getUserPanic(this.userpanic)
          
          
          
        }
          
      });

    }


    locatio
    user;
    parametros = false;

    map: GoogleMap;
    loading: any;
    userpanic;
    userallpanic;

    panics =[]
    


    async ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('user'));
    if (!this.parametros){
      console.log('entro');

      this.getLocationUser()
      await this.loadMap()
   

        this.getPanic(this.user.uid)
      
    }else{
      
      await this.loadMap()
      this.onButtonClick();
    }
  }

  getUserPanic(uid){
    console.log(uid,'UID');
    this.trackingSVC.getUser(uid).on('value', (res)=>{
      console.log(res,'RES');
      this.userallpanic = res.val();
      console.log(this.userallpanic,'USER PAN');
    })

  }

  loadMap() {
    this.map = GoogleMaps.create('map_canvas', {
      camera: {
        target: {
          lat: this.lat,
          lng: this.lng
        },
        zoom: 18,
        tilt: 30
      }
    });

  }

  async onButtonClick(lat?,lng?) {
    this.map.clear();

    let title = 'You are here'
    let snippet = ''

    

    this.loading = await this.loadingCtrl.create({
      message: 'Please wait...'
    });
    await this.loading.present();

    

    // Get the location of you
    this.map.getMyLocation().then((location: MyLocation) => {
      if (this.parametros){

        location.latLng.lat = this.lat
        location.latLng.lng = this.lng
        title = this.userallpanic.displayName
        snippet = 'Panic Button'

       
      }
      this.loading.dismiss();
      console.log(JSON.stringify(location, null ,2));
      console.log(location,'LOCATION');
      console.log(location.latLng,'LOCATION');

      // Move the map camera to the location with animation
      this.map.animateCamera({
        target: location.latLng,
        zoom: 17,
        tilt: 30
      });

      // add a marker
      let marker: Marker = this.map.addMarkerSync({
        title: title,
        snippet: snippet,
        position: location.latLng,
        animation: GoogleMapsAnimation.BOUNCE
      });

      // show the infoWindow
      marker.showInfoWindow();

      // If clicked it, display the alert
      marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
        //this.showToast('clicked!');
      });
    })
    .catch(err => {
      this.loading.dismiss();
      this.showToast(err.error_message);
    });
  }


 /*  async panicButton() {
    this.map.clear();

    let lat  = this.lat
    let lng = this.lng

    this.loading = await this.loadingCtrl.create({
      message: 'Please wait...'
    });
    await this.loading.present();

    let location = {
      latLng:{
        lat: lat,
        lng: lng
      }
    }
    this.loading.dismiss();
    console.log(location);
    console.log(location.latLng);

    this.map.animateCamera({
      target: location.latLng,
      zoom: 17,
      tilt: 30
    });

    let marker: Marker = this.map.addMarkerSync({
      title: 'Panic Button',
      snippet: this.userallpanic.displayName,
      position: location.latLng,
      animation: GoogleMapsAnimation.BOUNCE
    });

     // show the infoWindow
     marker.showInfoWindow();
     

     // If clicked it, display the alert
     marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
       this.showToast('clicked!');
     });

   
  } */


  async showToast(message: string) {
    let toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'middle'
    });

    toast.present();
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

  getLocationUser(){
 /*    this.gps = false;
    this.disabled = false; */
    let user = this.user
    this.trackingSVC.getLocation(user).once('value').then(resp=>{
      console.log(resp.val());
      let lat = resp.val().lat;
      let long = resp.val().lng;

      this.lat = lat;
      this.lng = long
      this.getLocation(lat,long);
      this.onButtonClick();
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
     const TU_LLAVE = 'AIzaSyDL-2mFo6QYsp7qNSQl95AzhVZ6njRsLtE';
     //const TU_LLAVE = 'AIzaSyDpPLmgRkC8ublILfSGj8961ku-hyTpNvs';
     this.http.get(
       `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${TU_LLAVE}`,{},{}
      ).then(data=>{
        let l = JSON.parse(data.data)
        this.locatio = l.results[0].formatted_address
        /* this.backgroundGeolocation.finish();  */
      })
   }


   openPanicUser(panics){
    this.map.clear()
    console.log(panics);
    
    let data = panics[(panics.length-1)]
    console.log(data);
    
    /* this.panics.forEach((data: any) => { */
      data.disableAutoPan = true;
      let p : ILatLng = {
        lat: data.lat,
        lng: data.lng
      }

      this.map.animateCamera({
        target: p,
        zoom: 17,
        tilt: 30
      });


      let marker: Marker = this.map.addMarkerSync({
        title: data.user.displayName,
        snippet: 'Panic Button',
        position: p,
        animation: GoogleMapsAnimation.BOUNCE        
      });
      marker.showInfoWindow();
      marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
        this.showToast('clicked!');
      });
   /*    marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(this.onMarkerClick);
      marker.on(GoogleMapsEvent.INFO_CLICK).subscribe(this.onMarkerClick); */
    /* }); */

   }

   getPanic(uid){
     
  /*    this.map = GoogleMaps.create('map_canvas', {
      camera: {
        target: {
          lat: this.lat,
          lng: this.lng
        },
      }
    }); */
     this.trackingSVC.getPanic(uid).on('value', (resp:any)=>{

      

   

     

      resp.forEach(r=>{

        let item = r.val()       
        item.key = r.key

        if (item.active){

          this.panics.push(item)

         
        }


      })

      console.log(this.panics);
      this.openPanicUser(this.panics)

     


    /*   panics.forEach(pan=>{
        let p : ILatLng = {
          lat: pan.lat,
          lng: pan.lng
        }
        

        console.log(p);
     
        
        let marker: Marker = this.map.addMarkerSync({
          title: pan.user.displayName,
          snippet: 'Panic Button',
          position: p,
          animation: GoogleMapsAnimation.BOUNCE,
          
        });


        marker.showInfoWindow();

        // If clicked it, display the alert
        marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
          this.showToast('clicked!');
        });
      }) */


     })
   }

   onMarkerClick(params: any) {
    let marker: Marker = <Marker>params[1];
    let iconData: any = marker.get('iconData');
    marker.setIcon(iconData);
  }



  openPanics(){
    //this.router.navigate(['panics'])

    
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: PanicsPage,
     
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        //this.dataReturned = dataReturned.data;
        console.log(dataReturned,'DATA');
        
        let user = JSON.parse(dataReturned.data)
        this.getPanic(user.uid)

        //alert('Modal Sent Data :'+ dataReturned);
      }
    });

    return await modal.present();
  }
   
  
}

