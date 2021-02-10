import { UtilService } from "./../../services/util.service";
import { Component, NgZone, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NavigationExtras } from '@angular/router';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { AlertController, ModalController, NavController, Platform } from "@ionic/angular";
import { Router } from "@angular/router";
import { AppointmentService } from "src/app/services/appointment.service";
declare var google;

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit {




  appointmentsDBRef:any;
  Appointments: any[] = [];
  totalAppointments = 4;

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
    private firebaseAuthService: AuthService,
    public appointmentService: AppointmentService) {


      this.appointmentsDBRef = this.firebaseAuthService.firebaseDB.collection('Appointments');
      this.getAppointments();

    }



  locatio


  userLocation;
  userCity;
  lat;
  lng;
  location;
  latLngResult;
  userLocationFromLatLng;

  ngOnInit(
  ) {
    this.locatio = 'Chihuahua, Chihuahua'
 /*    this.getLocation();
    this.getLocation2(); */
    this.initializeApp()
  }

  ionViewWillEnter() {
    this.util.menuCtrl.enable(true);
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

  getLocation(){
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
      this.getUserLocation();
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
