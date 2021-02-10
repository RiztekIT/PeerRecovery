import { UtilService } from "./../../services/util.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { mapStyle } from "src/environments/environment";
import { AuthService } from "src/app/services/auth.service";
import { AlertController } from "@ionic/angular";

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
    public authSVC: AuthService) {}

  ngOnInit() {}

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

