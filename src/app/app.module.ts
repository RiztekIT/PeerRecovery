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
/* import { BackgroundMode } from '@ionic-native/background-mode/ngx'; */



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
    NgSelectModule
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
    
    

    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
