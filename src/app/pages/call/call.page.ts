import { UtilService } from "./../../services/util.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { mapStyle } from "src/environments/environment";
import { AuthService } from "src/app/services/auth.service";
import { AlertController } from "@ionic/angular";
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview/ngx';
//import { VideoCapturePlus, VideoCapturePlusOptions, MediaFile } from '@ionic-native/video-capture-plus/ngx';
import { Zoom } from '@ionic-native/zoom/ngx';
import { VideocallService } from "src/app/services/videocall.service";
import firebase from 'firebase';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';


declare let RTCPeerConnection: any;
declare var MediaRecorder: any;



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
    public videocallSVC: VideocallService,
    private afDb: AngularFireDatabase,
    private androidPermissions: AndroidPermissions,
    /* private videoCapturePlus: VideoCapturePlus, */
    private zoomService: Zoom) {
      console.log('ENTRO');

      this.route.queryParams.subscribe(params => {
        console.log(params,'PARAMS');
        if (params && params.special) {
          this.callData = JSON.parse(params.special);
          this.user = this.callData.user;
          this.usercall = this.callData.usercall;
          this.data = this.callData;

        }
      });



      //this.openCamera();
    }

    img;
    user;
    usercall;
    listener;
    status;
    data;

    recordedBlobs: Blob[];
    callActive: boolean = false;
pc: any;
localStream: any;
channel;
channelN;
database;
senderId: string;
mediaRecorder: any;
downloadUrl: string;

@ViewChild("me", {static: false}) me: any;
@ViewChild("remote", {static: false}) remote: any;

  ngOnInit() {
    //this.initZoom();
    console.log(this.data);
    this.user = JSON.parse(sessionStorage.getItem('user'));
  /*   if (this.data.type=='caller'){

      this.getCall();   
    }
    else if (this.data.type=='answer'){
      this.setupWebRtc();
      //this.showRemote(); 
    } */

    this.status = 'Calling'

    

    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(result=>{

      if (result.hasPermission){

        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.RECORD_AUDIO).then(res=>{
          if (res.hasPermission){
            this.getCall();

          }else{
            this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA, this.androidPermissions.PERMISSION.GET_ACCOUNTS, this.androidPermissions.PERMISSION.RECORD_AUDIO]).then(r=>{
              this.getCall();
            });
          }
        })
        
      }else{
        
        this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA, this.androidPermissions.PERMISSION.GET_ACCOUNTS, this.androidPermissions.PERMISSION.RECORD_AUDIO]).then(r=>{
          this.getCall();
        });
      }

    }).catch(e=>{
   
      this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA, this.androidPermissions.PERMISSION.GET_ACCOUNTS, this.androidPermissions.PERMISSION.RECORD_AUDIO]).then(r=>{
        this.getCall();
      });
   console.log(e,'ERROR3');
 })



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
    this.openCamera()
    //this.startCamera();
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

    let div = document.getElementById('')
    

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
  /*   const options: VideoCapturePlusOptions = {
      limit: 1,
      highquality: true,
      portraitOverlay: 'assets/img/camera/overlay/portrait.png',
      landscapeOverlay: 'assets/img/camera/overlay/landscape.png'
   } */

/*    this.videoCapturePlus.captureVideo(options).then(mediaFile =>{
     console.log(mediaFile);
   }) */


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




  /*  */

  getCall(){
    this.listener = this.videocallSVC.getCall(this.videocallSVC.keycall).once('value', call=>{
      console.log(call.val());
      /* console.log(call.val().Members.val()); */
      this.call()
      let keys = Object.keys(call.val().Members)
      console.log(keys);

      console.log(call.val().Members[keys[0]]);
      console.log(call.val().Members[keys[1]]);

      if ((call.val().Members[keys[0]]) && (call.val().Members[keys[1]]) ){
      /*   if (this.data.type=='caller'){

          this.showRemote();
        } */

        this.status = 'Ready'

      }




    })
  }

  call(){
    console.log('Llamando');
    this.recordedBlobs = new Array<Blob>()
    this.setupWebRtc();
  }





  setupWebRtc() {
    this.senderId = this.guid();
    console.log(this.senderId);
    var channelName = "/webrtc/"+this.videocallSVC.keycall;
    console.log(channelName);
    //this.database = firebase.database().ref('Video/');

    
    
    
    //this.channel = firebase.database().ref(channelName).on();
        this.channel = this.afDb.list(channelName);

    this.database = firebase.database().ref(channelName);
    this.database.on("child_added", this.readMessage.bind(this));

    try {
      this.pc = new RTCPeerConnection({
        iceServers: [
          { urls: "stun:stun.services.mozilla.com" },
          { urls: "stun:stun.l.google.com:19302" },
          { urls: "stun:0.0.0.0:6200" },
        ]
      }, { optional: [] });
    } catch (error) {
      console.log(error);
      this.pc = new RTCPeerConnection({
        iceServers: [
          { urls: "stun:stun.services.mozilla.com" },
          { urls: "stun:stun.l.google.com:19302" },
          { urls: "stun:0.0.0.0:6200" },
        ]
      }, { optional: [] });
      
    }

    console.log(this.pc);



    this.pc.onicecandidate = event => {
      console.log(event );
      event.candidate ? this.sendMessage(this.senderId, JSON.stringify({ ice: event.candidate })) : console.log("Sent All Ice");
    }

    this.pc.onremovestream = event => {
      console.log('Stream Ended');
    }

    this.pc.ontrack = event =>
      (this.remote.nativeElement.srcObject = event.streams[0]); // use ontrack
    this.showMe();
    if (this.data.type=='caller'){
     
      this.showRemote(); 
    }
  }

  readMessage(data) {
    console.log(data,'DATA');
    console.log(data.val(),'DATAs');
    if (!data) return;
    try {
      console.log(data.val().message);
      var msg = JSON.parse(data.val().message);
      let personalData = data.val().personalData;
      var sender = data.val().sender;
      if (sender != this.senderId) {
        if (msg.ice != undefined && this.pc != null) {
          this.pc.addIceCandidate(new RTCIceCandidate(msg.ice));
        } else if (msg.sdp.type == "offer") {
          this.callActive = true;
          this.pc.setRemoteDescription(new RTCSessionDescription(msg.sdp))
            .then(() => this.pc.createAnswer())
            .then(answer => this.pc.setLocalDescription(answer))
            .then(() => this.sendMessage(this.senderId, JSON.stringify({ sdp: this.pc.localDescription })));
        } else if (msg.sdp.type == "answer") {
          
          this.callActive = true;
          this.pc.setRemoteDescription(new RTCSessionDescription(msg.sdp));
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  sendMessage(senderId, data) {
    var msg = this.channel.push({ sender: senderId, message: data });
    
    msg.remove();
  }

  public ngOnDestroy() {
 /*    this.pc.close();
    let tracks = this.localStream.getTracks();
    for (let i = 0; i < tracks.length; i++) {
      tracks[i].stop();
    }
    this.callActive = false; */

  }

  guid() {
    return (this.s4() + this.s4() + "-" + this.s4() + "-" + this.s4() + "-" + this.s4() + "-" + this.s4() + this.s4() + this.s4());
  }
  s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }

  handleDataAvailable() {
    
    try {
      this.mediaRecorder.ondataavailable = (event) => {
        if (event.data && event.data.size > 0) {
          this.recordedBlobs.push(event.data)
        }
      }
    } catch (error) {
      console.log(error)
    }
}


// handleStop(event) {
//   console.log('Recorder stopped: ', event);
//   const videoBuffer = new Blob(this.recordedBlobs, {type: 'video/webm'});
//   this.downloadUrl = window.URL.createObjectURL(videoBuffer); // you can download with <a> tag
//  /*  const link = document.createElement('a');
//   link.href = this.downloadUrl;
//   link.target = '_blank'    
//   link.click(); */
// }

onStopRecordingEvent() {
  try {
    console.log('onstop');
    this.mediaRecorder.onstop = (event: Event) => {
      const videoBuffer = new Blob(this.recordedBlobs, { type: 'video/webm' })
      this.downloadUrl = window.URL.createObjectURL(videoBuffer) // you can download with <a> tag
     /*  Swal.fire({
        title: 'Saving Video',              
     
      })
      Swal.showLoading() */

      
      
      this.videocallSVC.tareaCloudStorage(this.videocallSVC.keycall+'/'+this.user.uid,videoBuffer).percentageChanges().subscribe(p=>{
        let porcentaje = Math.round(p);
      if (porcentaje == 100) {
        
       
      }
      
     

      })

      
      /* const link = document.createElement('a');
  link.href = this.downloadUrl;
  link.target = '_target';
  link.setAttribute('download', 'video')
  document.body.appendChild(link)    
  link.click();  */
    }
  } catch (error) {
    console.log(error)
  }
}

startRecording(stream) {
  let options = {mimeType: 'video/webm'};
  this.recordedBlobs = [];
  try {
      this.mediaRecorder = new MediaRecorder(stream);
  } catch (e0) {
      console.log('Try different mimeType',e0);
  }
  console.log('Created MediaRecorder', this.mediaRecorder, 'with options');
  //this.mediaRecorder.onstop = this.handleStop;
  //this.mediaRecorder.ondataavailable = this.handleDataAvailable;
  //this.stopRecording()
  this.handleDataAvailable();
  this.onStopRecordingEvent();

  this.mediaRecorder.start(100); // collect 100ms of data
  console.log('MediaRecorder started', this.mediaRecorder);
}

stopRecording() {
  console.log('stop');
this.mediaRecorder.stop();

console.log('Recorded Blobs: ', this.recordedBlobs);
//this.recordVideoElement.controls = true;
}

showMe() {
  console.log('showme');
  
 //AQUI
 this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(result=>{
   console.log(result,'RESULT');
  navigator.mediaDevices.getUserMedia({audio: true, video: true}).then(stream=>{
  /* navigator.mediaDevices.getUserMedia({audio: true, video: true}).then(stream=>{ */
    console.log(stream,'STREAM');
    this.me.nativeElement.srcObject = stream;
    this.me.nativeElement.muted = true;
    
    console.log(stream,'STREAM2');
   
    this.pc.addStream(stream);
    console.log(stream,'STREAM3');
    this.localStream = stream;
    console.log(this.localStream);
    this.startRecording(stream);
  }).catch(e=>{
    console.log(JSON.stringify(e),'ERROR1');
  })

 }).catch(e=>{
   
  this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA, this.androidPermissions.PERMISSION.GET_ACCOUNTS, this.androidPermissions.PERMISSION.MICROPHONE]);
   console.log(e,'ERROR3');
 })
/* 
 this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(
  result => console.log('Has permission?', result.hasPermission),
  err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA)
);

this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA]); */





 /*  navigator.mediaDevices.getUserMedia({ audio: true, video: true })
    .then(stream => (this.me.nativeElement.srcObject = stream)).catch(e=>{
      console.log(e,'ERROR1');
    })
    .then(stream => {
      this.pc.addStream(stream);
      this.localStream = stream;
      console.log(this.localStream);
      this.startRecording(stream);

      
      
    }).catch(e=>{
      console.log(e,'ERROR2');
    }); */
}

showRemote(){
  console.log('Contesto');
  try {
    //this.setupWebRtc();
    this.pc.createOffer()
      .then(offer => this.pc.setLocalDescription(offer))
      .then(() => {
        this.sendMessage(this.senderId, JSON.stringify({ sdp: this.pc.localDescription }));
        this.callActive = true;
      });
  } catch (error) {
    this.setupWebRtc();
    console.log(error);
  }
}

reconnect(){
  this.videocallSVC.reconnect(this.user,this.videocallSVC.keycall)
  //this.me.nativeElement.requestPictureInPicture()
  this.showRemote();

}

hangup(){
    
  //this.status = 'Hang Up'
  this.videocallSVC.hangup(this.user,this.videocallSVC.keycall)
  //this.videocallSVC.getCall(this.videocallSVC.keycall).off('value',this.listener)

  
  console.log('Colgaron');

  this.stopRecording()

  this.pc.close();
let tracks = this.localStream.getTracks();    
for (let i = 0; i < tracks.length; i++) {
tracks[i].stop();
}
this.callActive = false;


this.router.navigate(['video']);

/* this.close(); */

  




 

  //this.setupWebRtc();
  


}
  
}


