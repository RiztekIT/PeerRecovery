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

@NgModule({
  declarations: [AppComponent,PopOverContentComponent,SuccessModalComponent,CallingComponent],
  entryComponents: [PopOverContentComponent,SuccessModalComponent,CallingComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot({
      rippleEffect: false,
      mode: 'md'
    }),
    AppRoutingModule,
    NgSelectModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
