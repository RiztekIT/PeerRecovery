import { UtilService } from "./../../services/util.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { mapStyle } from "src/environments/environment";
import { AuthService } from "src/app/services/auth.service";
import { AlertController } from "@ionic/angular";
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: "app-call",
  templateUrl: "./call.page.html",
  styleUrls: ["./call.page.scss"],
})
export class CallPage implements OnInit {
  callData: any;
  
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
  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private camera: Camera,
    private util: UtilService,
    private alertController: AlertController,
    public authSVC: AuthService) {

      this.route.queryParams.subscribe(params => {
        if (params && params.special) {
          this.callData = JSON.parse(params.special);
          console.log(this.callData);
        }
      });


      this.openCamera();
    }

  ngOnInit() {}

  openCamera(){
        const options: CameraOptions = {
          quality: 100,
          destinationType: this.camera.DestinationType.FILE_URI,
          encodingType: this.camera.EncodingType.JPEG,
          mediaType: this.camera.MediaType.PICTURE
        }
        
        this.camera.getPicture(options).then((imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        let base64Image = 'data:image/jpeg;base64,' + imageData;
        }, (err) => {
        // Handle error
        });
  }

  


  async onMarkerSelect(marker: any) {
    if (marker.isOpen) {
      await this.markers.forEach((element) => {
        element.select = false;
      });
      marker.select = await true;
    }
  }


  
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
  
}


