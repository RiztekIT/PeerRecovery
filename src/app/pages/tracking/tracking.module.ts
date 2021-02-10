import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrackingPageRoutingModule } from './tracking-routing.module';

import { TrackingPage } from './tracking.page';
import { AgmCoreModule } from '@agm/core';
import { AgmOverlays } from "agm-overlays"

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgmOverlays,
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    TrackingPageRoutingModule
  ],
  declarations: [TrackingPage]
})
export class TrackingPageModule {}
