import { UtilService } from "./../../services/util.service";
import { Component, NgZone, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NavigationExtras } from '@angular/router';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { AlertController, ModalController, NavController, Platform } from "@ionic/angular";
import { Router } from "@angular/router";
import { AppointmentService } from "src/app/services/appointment.service";
import { HTTP } from '@ionic-native/http/ngx';
import {
  BackgroundGeolocation,
  BackgroundGeolocationConfig,
  BackgroundGeolocationResponse,
  BackgroundGeolocationEvents
} from "@ionic-native/background-geolocation/ngx";
import { ForegroundService } from '@ionic-native/foreground-service/ngx';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';




declare var google;
declare var window;


interface point {
  lat: number;
  lng: number;
}

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})

export class HomePage implements OnInit {




  appointmentsDBRef:any;
  Appointments: any[] = [];
  totalAppointments = 4;
  resp = ''

  specialist = [
    {
      name: "Dr.Janice Bailey",
      specialist: "Gynaecology",
      img: "../../../assets/imgs/data/Specialist/Specialist1.png",
    },
    {
      name: "Dr.Matthew Willis",
      specialist: "General Surgeon",
      img: "../../../assets/imgs/data/Specialist/Specialist2.png",
    },
    {
      name: "Dr.Diana Willis",
      specialist: "Homeopathic",
      img: "../../../assets/imgs/data/Specialist/Specialist3.png",
    },
  ];
  treatments = [
    {
      img: "../../../assets/imgs/data/home/treat1.svg",
      name: "General Medicine",
      color: "#81BA83",
    },
    {
      img: "../../../assets/imgs/data/home/treat2.svg",
      name: "Woman's Health",
      color: "#E48A84",
    },
    {
      img: "../../../assets/imgs/data/home/treat3.svg",
      name: "Bone & Joints",
      color: "#A585BD",
    },
    {
      img: "../../../assets/imgs/data/home/treat4.svg",
      name: "Skin & Hair",
      color: "#00A8E5",
    },
  ];
  constructor(private util: UtilService, 
    public authSVC: AuthService, 
    private geolocation: Geolocation, 
    private nativeGeocoder: NativeGeocoder, 
    private platform: Platform, 
    public zone: NgZone,
    private alertController: AlertController,
    private nav: NavController,
    private router: Router,
    private modalCtr: ModalController,    
    public appointmentService: AppointmentService,
    public http: HTTP,
    private backgroundGeolocation: BackgroundGeolocation,
    public foregroundService: ForegroundService,
    public backgroundMode : BackgroundMode
    ) {


      //this.appointmentsDBRef = this.firebaseAuthService.firebaseDB.collection('Appointments');
      //this.getAppointments();

    }



  locatio

arr:any;
locations;
  userLocation;
  userCity;
  lat;
  lng;
  location;
  latLngResult;
  userLocationFromLatLng;
  gps_update_link: string = "https://peerrecovery-app-default-rtdb.firebaseio.com/Tracking/2ZrxjV7h9yNEQNOEv41Pn0Oaedr2/Current.json";

  ngOnInit(
  ) {
    this.locatio = 'Chihuahua, Chihuahua'
    this.authSVC.usersign = JSON.parse(sessionStorage.getItem('user'));
 /*    this.getLocation();
    this.getLocation2(); */
    this.arr = []
    this.locations = []
    this.initializeApp()
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.stop()
  }

  ionViewWillEnter() {
    this.util.menuCtrl.enable(true);
  }


  startBackgroundGeolocation() {
    const config: BackgroundGeolocationConfig = {
      desiredAccuracy: 10,
      stationaryRadius: 20,
      distanceFilter: 1,
      debug: true, //  enable this hear sounds for background-geolocation life-cycle.
      stopOnTerminate: false, // enable this to clear background location settings when the app terminates
      notificationTitle: "PeerRecovery Tracking 2",
notificationText: "Tracking",
interval: 10000,

    };

  

    this.backgroundGeolocation.configure(config).then(() => {
      this.backgroundGeolocation
        .on(BackgroundGeolocationEvents.location)
        .subscribe((location: BackgroundGeolocationResponse) => {
          console.log(location);

          let locationstr = localStorage.getItem("location")

          if (locationstr !=null){
            this.arr.push(location)
          }else{
            let locationarr = JSON.parse(locationstr)
            this.arr = locationstr;
          }
          localStorage.setItem("location", JSON.stringify(this.arr));

          this.authSVC.updateLocation(location.latitude,location.longitude, this.authSVC.usersign)

       /*    this.backgroundGeolocation.startTask().then(res=>{

            
            this.getGPS();
            this.put();
          }) */

          
          /* this.sendGPS(location); */
          /* this.getGPS(); */
          /* this.foregroundService.start('Tracking', 'Enabled', 'drawable/fsicon') */
         

          //this.getGPS()
          //this.authSVC.updateLocation(location.latitude,location.longitude, this.authSVC.usersign)
          /* this.getLocation(location.latitude,location.longitude); */
       /*    this.backgroundGeolocation.finish().then(res=>{
            this.getGPS();
          });
 */
          // IMPORTANT:  You must execute the finish method here to inform the native plugin that you're finished,
          // and the background-task may be completed.  You must do this regardless if your operations are successful or not.
          // IF YOU DON'T, ios will CRASH YOUR APP for spending too much time in the background.
        });
    });

    // start recording location
    
    window.app = this;

    // If you wish to turn OFF background-tracking, call the #stop method.
    //this.backgroundGeolocation.stop();
  }

  start(){
    this.backgroundGeolocation.start();
  }

  stop(){
    this.backgroundGeolocation.stop();
  }


  getL(){
this.locations = JSON.parse(localStorage.getItem("location"))
  }

  sendGPS(location) {
    if (location.speed == undefined) {
      location.speed = 0;
    }
    let timestamp = new Date(location.time);

    this.http
      .put(
        this.gps_update_link, // backend api to post
        {
          lat: location.latitude,
          lng: location.longitude,
          speed: location.speed,
          timestamp: timestamp
        },
        {}
      )
      .then(data => {
      
        /* this.backgroundGeolocation.finish(); // FOR IOS ONLY */
      })
      .catch(error => {
      
        /* this.backgroundGeolocation.finish(); // FOR IOS ONLY */
      });
  }

  put(lat?,lng?){

    let timestamp = new Date();
/* 
    let data = {
      lat: lat,
      lng: lng,
      timestamp: {
        "nanoseconds": 870000000,
        "seconds": 1624645817
    }
    } */
    let data = {
      "lat": 39.7420054,
      "lng": -106.146794,
      "timestamp": {
          "nanoseconds": 870000000,
          "seconds": 1624645817
      }
  }

    let headers = {
      'Content-Type': 'application/json',
       'Content-Length': '150',
       'Host' : 'peerrecovery-app-default-rtdb.firebaseio.com'
    }

    console.log(data);
    console.log(headers);
    
    
    
    /* let d = '{"lat":39.7420054,"lng":-106.146794,"timestamp":{"nanoseconds":870000000,"seconds":1624645817}}' */
    
    /* console.log(d); */

    
    this.http.put('https://peerrecovery-app-default-rtdb.firebaseio.com/Tracking/2ZrxjV7h9yNEQNOEv41Pn0Oaedr2/Current.json',data, headers).then(res=>{
      console.log(res,'RESPUESTA');
      this.resp = JSON.stringify(res.data)
    }).catch(e=>{
      console.log(e,'ERROR');
      this.resp = JSON.stringify(e)

    })
/* 
    this.http
      .put(
        this.gps_update_link, // backend api to post
        {
          lat: lat,
          lng: lng,
          timestamp: {
            "nanoseconds": 870000000,
            "seconds": 1624645817
        }
        },
        {}
      )
      .then(data => {
      
        this.backgroundGeolocation.finish(); // FOR IOS ONLY
      })
      .catch(error => {
      
        this.backgroundGeolocation.finish(); // FOR IOS ONLY
      }); */

  }


  

  getGPS(){
    /* Swal.showLoading(); */

    

    
    
    navigator.geolocation.watchPosition(resp=>{
      console.log(resp);
      let pos : point = {
        lat: resp.coords.latitude,
        lng: resp.coords.longitude
      }
  




      //this.put(resp.coords.latitude,resp.coords.longitude)
      this.authSVC.updateLocation(resp.coords.latitude,resp.coords.longitude, this.authSVC.usersign)

      this.getLocation(resp.coords.latitude,resp.coords.longitude );

      

      
      /* this.foregroundService.start('Tracking2', 'Enabled2', 'drawable/fsicon') */
      
    })
  }

  getLocation(lat,long){
    
     const TU_LLAVE = 'AIzaSyDpPLmgRkC8ublILfSGj8961ku-hyTpNvs';
     this.http.get(
       `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${TU_LLAVE}`,{},{}
      ).then(data=>{
        let l = JSON.parse(data.data)
        this.locatio = l.results[0].formatted_address
        this.backgroundGeolocation.finish(); 
      })
   }




  getAppointments(){
    this.appointmentService.getAppointments().on('value', resp=>{
      this.Appointments  = [];
      resp.forEach((childSnapshot: any) => {
          const item = childSnapshot.val();
          item.key = childSnapshot.key;
          this.Appointments.push(item);
      });
      console.log(resp);
      console.log(this.Appointments);
    })
    
    }



  openAppointmentPage(item) {
    let appointment = {
      appointmentID: item.key,
    };
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(appointment)
      }
    };
    this.router.navigate(['appointment'], navigationExtras);

  }

  newAppointmentPage(){
    this.router.navigate(['appointment']);
  }





  async presentAlert() {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Confirm!',
        message: '<strong>Are you in trouble?, click on confirm to continue!</strong>!!!',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('Confirm Cancel: blah');
            }
          }, {
            text: 'Confirm!',
            handler: () => {
              console.log('Confirm Okay');
            }
          }
        ]
      });
  
      await alert.present();
    }

















  goToSearch() {
    this.util.navCtrl.navigateForward("search");
  }

  goToAppointmentDetail() {}

  goToAllSpecialist() {
    this.util.navCtrl.navigateForward("doctorCardView");
  }

  goToDoctorDetail() {}

  goToAllTreatments() {}

  goToAllFavoriteDoctor() {}

  goToChatWithDoc() {
    this.util.navCtrl.navigateForward("chatWithDoctor");
  }

  goToBuyPlan() {}

  getLocationn(){
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp);
      // resp.coords.latitude
      // resp.coords.longitude
     }).catch((error) => {
       console.log('Error getting location', error);
     });
     
     let watch = this.geolocation.watchPosition();
     watch.subscribe((data) => {
       console.log(data);
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
     });

     
  }

  getLocation2(){
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
  };

  
  
  this.nativeGeocoder.reverseGeocode(52.5072095, 13.1452818, options)
    .then((result: NativeGeocoderResult[]) => console.log(JSON.stringify(result[0])))
    .catch((error: any) => console.log(error));
  
/*   this.nativeGeocoder.forwardGeocode('Berlin', options)
    .then((result: NativeGeocoderResult[]) => console.log('The coordinates are latitude=' + result[0].latitude + ' and longitude=' + result[0].longitude))
    .catch((error: any) => console.log(error)); */
  }





  /*  */

  initializeApp() {
    this.platform.ready().then(() => {
      //this.getUserLocation();
      /* this.backgroundMode.enable(); */
      
     /*  this.backgroundMode.on('activate').subscribe(res=>{
        this.getGPS();
        this.presentAlert()
       
      }) */
      this.startBackgroundGeolocation()
      this.getGPS()
      //this.startBackgroundGeolocation()
      
      //this.put(1,1);
      //this.backgroundGeolocation.start();
    });
  }
  getUserLocation() {
    this.geolocation.getCurrentPosition().then((resp) => {
      // this.getGeoLocation(resp.coords.latitude, resp.coords.longitude)
      if (this.platform.is('cordova')) {
        let options: NativeGeocoderOptions = {
          useLocale: true,
          maxResults: 5
        };
        this.nativeGeocoder.reverseGeocode(resp.coords.latitude, resp.coords.longitude, options)
          .then((result: any) => {
            console.log(result)
            this.userLocation = result[0]
            console.log(this.userLocation)
          })
          .catch((error: any) => console.log(error));
      } else {
        this.getGeoLocation(resp.coords.latitude, resp.coords.longitude)
      }
    }).catch((error) => {
    });
    let watch = this.geolocation.watchPosition();
    watch.subscribe((data: any) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
      let options: NativeGeocoderOptions = {
        useLocale: true,
        maxResults: 5
      };
      if (this.platform.is('cordova')) {
        let options: NativeGeocoderOptions = {
          useLocale: true,
          maxResults: 5
        };
        this.nativeGeocoder.reverseGeocode(data.coords.latitude, data.coords.longitude, options)
          .then((result: NativeGeocoderResult[]) => {
            console.log(result)
            this.userLocation = result[0]
            console.log(this.userLocation)
          })
          .catch((error: any) => console.log(error));
      } else {
        console.log('not cordove')
        this.getGeoLocation(data.coords.latitude, data.coords.longitude)
      }
    });
  }
  async getGeoLocation(lat: number, lng: number, type?) {
    if (navigator.geolocation) {
      let geocoder = await new google.maps.Geocoder();
      let latlng = await new google.maps.LatLng(lat, lng);
      let request = { latLng: latlng };

      await geocoder.geocode(request, (results, status) => {
        if (status == google.maps.GeocoderStatus.OK) {
          let result = results[0];
          this.zone.run(() => {
            if (result != null) {
              this.userCity = result.formatted_address;
              if (type === 'reverseGeocode') {
                this.latLngResult = result.formatted_address;
              }
            }
          })
        }
      });
    }
  }
  reverseGeocode(lat, lng) {
    if (this.platform.is('cordova')) {
      let options: NativeGeocoderOptions = {
        useLocale: true,
        maxResults: 5
      };
      this.nativeGeocoder.reverseGeocode(lat, lng, options)
        .then((result: NativeGeocoderResult[]) => this.userLocationFromLatLng = result[0])
        .catch((error: any) => console.log(error));
    } else {
      this.getGeoLocation(lat, lng, 'reverseGeocode');
    }
  }
  forwardGeocode(address) {
    if (this.platform.is('cordova')) {
      let options: NativeGeocoderOptions = {
        useLocale: true,
        maxResults: 5
      };
      this.nativeGeocoder.forwardGeocode(address, options)
        .then((result: NativeGeocoderResult[]) => {
          this.zone.run(() => {
            this.lat = result[0].latitude;
            this.lng = result[0].longitude;
          })
        })
        .catch((error: any) => console.log(error));
    } else {
      let geocoder = new google.maps.Geocoder();
      geocoder.geocode({ 'address': address }, (results, status) => {
        if (status == google.maps.GeocoderStatus.OK) {
          this.zone.run(() => {
            this.lat = results[0].geometry.location.lat();
            this.lng = results[0].geometry.location.lng();
          })
        } else {
          alert('Error - ' + results + ' & Status - ' + status)
        }
      });
    }
  }

}
