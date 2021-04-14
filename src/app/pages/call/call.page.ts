import { UtilService } from "./../../services/util.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { mapStyle } from "src/environments/environment";
import { AuthService } from "src/app/services/auth.service";
import { AlertController } from "@ionic/angular";
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview/ngx';
import { VideoCapturePlus, VideoCapturePlusOptions, MediaFile } from '@ionic-native/video-capture-plus/ngx';
import { Zoom } from '@ionic-native/zoom/ngx';


@Component({
  selector: "app-call",
  templateUrl: "./call.page.html",
  styleUrls: ["./call.page.scss"],
})
export class CallPage implements OnInit {
  callData: any;

  SDK_KEY:string = "xqvI8YnZzEcm2wr4U0DYUl7eB90sPD2iiBjQ";
  SDK_SECRET:string = "iQWxlbFuiEzn4zIJjP1xK1rAYS07uMmgTCiN";
  
  
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
    public authSVC: AuthService,
    private cameraPreview: CameraPreview,
    private videoCapturePlus: VideoCapturePlus,
    private zoomService: Zoom) {

      this.route.queryParams.subscribe(params => {
        if (params && params.special) {
          this.callData = JSON.parse(params.special);
          console.log(this.callData);
        }
      });


      //this.openCamera();
    }

    img;

  ngOnInit() {
    this.initZoom();
  }

  openCamera(){
        const options: CameraOptions = {
          quality: 100,
          destinationType: this.camera.DestinationType.FILE_URI,
          encodingType: this.camera.EncodingType.JPEG,
          mediaType: this.camera.MediaType.PICTURE
        }

        console.log(options);
        
        this.camera.getPicture(options).then((imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        console.log(imageData);
        let base64Image = 'data:image/jpeg;base64,' + imageData;
        console.log(base64Image);
        this.img = base64Image
        }, (err) => {
        // Handle error
        });

        
  }

  openCam(){
    console.log('CAMARA');
    //this.openCamera()
    this.startCamera();
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



  startCamera(){

    let div = document.getElementById('video')
    

    // camera options (Size and location). In the following example, the preview uses the rear camera and display the preview in the back of the webview
const cameraPreviewOpts: CameraPreviewOptions = {
  x: 0,
  y: 0,
  width: +div.getAttribute('width'),
  height: +div.getAttribute('heigth'),
  camera: 'rear',
  tapPhoto: true,
  previewDrag: true,
  toBack: false,
  alpha: 1  
}

// picture options
const pictureOpts: CameraPreviewPictureOptions = {
  width: 1280,
  height: 1280,
  quality: 85
}
    // start camera
this.cameraPreview.startCamera(cameraPreviewOpts).then(
  (res) => {
    console.log(res)
  },
  (err) => {
    console.log(err)
  });

  

  
  }

  startVideo(){
    var opts = {
      cameraDirection: 'BACK',
      width: (window.screen.width / 2),
      height: (window.screen.height / 2),
      quality: 60,
      withFlash: false
    }

    this.cameraPreview.startRecordVideo(opts).then(res=>{
      console.log(res);
    })
  }


  recordVideo(){
    const options: VideoCapturePlusOptions = {
      limit: 1,
      highquality: true,
      portraitOverlay: 'assets/img/camera/overlay/portrait.png',
      landscapeOverlay: 'assets/img/camera/overlay/landscape.png'
   }

   this.videoCapturePlus.captureVideo(options).then(mediaFile =>{
     console.log(mediaFile);
   })


   /* this.videoCapturePlus.captureVideo(options).then(mediafile: MediaFile[] => console.log(mediafile), error => console.log('Something went wrong')); */

  }


  //ZOOM
  //SDK KEY
  //8eNI0Df1PjUKcNWOPBPJALT4uS6tPlJqUIuW
  //SDK Secret
  //YE5ZTor7c5BQXdqz2D9SAXzq1X7K29jkHq4n

  initZoom(){
    this.zoomService.initialize(this.SDK_KEY, this.SDK_SECRET).then(success=>{
      console.log(success);
      this.loginZoom()
    })  
  .catch((error: any) => console.log(error));
  }

  joinMeeting(){
    let options = {
      "no_driving_mode":true,
      "no_invite":true,
      "no_meeting_end_message":true,
      "no_titlebar":false,
      "no_bottom_toolbar":false,
      "no_dial_in_via_phone":true,
      "no_dial_out_to_phone":true,
      "no_disconnect_audio":true,
      "no_share":true,
      "no_audio":true,
      "no_video":true,
      "no_meeting_error_message":true
     };
    let meetingNumber = '74695593469'
    let meetingPassword = 'phc5T9'
    let displayName = 'CEL PEERRCOVERY'
    
    this.zoomService.joinMeeting(meetingNumber, meetingPassword, displayName, options)
    .then((success: any) => console.log(success))
  .catch((error: any) => console.log(error));
  }

  initMeeting2(){
    let options = {
      "no_driving_mode":true,
      "no_invite":true,
      "no_meeting_end_message":true,
      "no_titlebar":false,
      "no_bottom_toolbar":false,
      "no_dial_in_via_phone":true,
      "no_dial_out_to_phone":true,
      "no_disconnect_audio":true,
      "no_share":true,
      "no_audio":true,
      "no_video":true,
      "no_meeting_error_message":true
     };
    let meetingNumber = '123456789'
    let displayName = 'CEL PEERRCOVERY'
    let zoomToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOm51bGwsImlzcyI6InNoV3FnYzVuUXlxSG9RRFFqWEpVYlEiLCJleHAiOjE2MTc3NTU1MDYsImlhdCI6MTYxNzc1MDEwNn0.jSv27DD6L8QBRwSdFiQU9usK1d6iv4zeo6xec7lm8Pw'
    let zoomAccessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOm51bGwsImlzcyI6InNoV3FnYzVuUXlxSG9RRFFqWEpVYlEiLCJleHAiOjE2MTc3NTU1MDYsImlhdCI6MTYxNzc1MDEwNn0.jSv27DD6L8QBRwSdFiQU9usK1d6iv4zeo6xec7lm8Pw'
    let userId = 'ivan.talamantes@live.com'
    console.log(userId);
    this.zoomService.startMeetingWithZAK(meetingNumber, displayName, zoomToken, zoomAccessToken, userId, options)
  .then((success: any) => console.log(success))
  .catch((error: any) => console.log(error));
  }

  loginZoom(){
    this.zoomService.login('losarcoscongregacion2020@gmail.com', 'LosArcos2020.')
  .then((success: any) => console.log(success))
  .catch((error: any) => console.log(error));
  }

  initMeeting(){
    let options = {
      "no_driving_mode":true,
      "no_invite":true,
      "no_meeting_end_message":true,
      "no_titlebar":false,
      "no_bottom_toolbar":false,
      "no_dial_in_via_phone":true,
      "no_dial_out_to_phone":true,
      "no_disconnect_audio":true,
      "no_share":true,
      "no_audio":true,
      "no_video":true,
      "no_meeting_error_message":true
     };
    

    this.zoomService.startInstantMeeting(options)
  .then((success: any) => console.log(success))
  .catch((error: any) => console.log(error));
  }
  
}


