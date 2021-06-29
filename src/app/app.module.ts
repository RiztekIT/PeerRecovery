import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { PopOverContentComponent } from './components/pop-over-content/pop-over-content.component';
import { SuccessModalComponent } from './components/success-modal/success-modal.component';
import { CallingComponent } from './components/calling/calling.component';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { PipesModule } from './pipes/pipes.module';
import { Camera } from '@ionic-native/camera/ngx';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview/ngx';
//import { VideoCapturePlus, VideoCapturePlusOptions, MediaFile } from '@ionic-native/video-capture-plus/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Zoom } from '@ionic-native/zoom/ngx';
import { HTTP } from '@ionic-native/http/ngx';
import { BackgroundGeolocation } from "@ionic-native/background-geolocation/ngx";
import { ForegroundService } from '@ionic-native/foreground-service/ngx';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
import { AgmCoreModule } from '@agm/core';
import { FCM } from '@ionic-native/fcm/ngx';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { HttpClientModule } from '@angular/common/http';

/* import { BackgroundMode } from '@ionic-native/background-mode/ngx'; */


let firebaseConfig = {
  apiKey: "AIzaSyDL-2mFo6QYsp7qNSQl95AzhVZ6njRsLtE",
  /* apiKey: "AIzaSyDpPLmgRkC8ublILfSGj8961ku-hyTpNvs", */
  authDomain: "peerrecovery-app.firebaseapp.com",
  databaseURL: "https://peerrecovery-app-default-rtdb.firebaseio.com",
  projectId: "peerrecovery-app",
  storageBucket: "peerrecovery-app.appspot.com",
  messagingSenderId: "1014351207922",
  appId: "1:1014351207922:web:6d002db3f73a4587505f6b",
  measurementId: "G-222ERRG0EM"
};



@NgModule({
  declarations: [AppComponent,PopOverContentComponent,SuccessModalComponent,CallingComponent],
  entryComponents: [PopOverContentComponent,SuccessModalComponent,CallingComponent],
  exports: [],
  imports: [
    PipesModule,
    BrowserModule,
    IonicModule.forRoot({
      rippleEffect: false,
      mode: 'ios'
    }),
    AppRoutingModule,
    NgSelectModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDL-2mFo6QYsp7qNSQl95AzhVZ6njRsLtE'
    }),
    AngularFireModule.initializeApp(firebaseConfig),
    /* AngularFireModule, */
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    HttpClientModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    NativeGeocoder, 
    Camera,       
    CameraPreview,
    /* VideoCapturePlus, */
    GooglePlus,
    Zoom,
    HTTP,
    BackgroundGeolocation,
    /* BackgroundMode, */
    ForegroundService,
    BackgroundMode,
    FCM,
    AngularFireDatabase, 
    AndroidPermissions,   
    
    
    

    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
