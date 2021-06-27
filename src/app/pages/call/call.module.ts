import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CallPageRoutingModule } from './call-routing.module';

import { CallPage } from './call.page';
import { AgmCoreModule } from '@agm/core';
import { AgmOverlays } from "agm-overlays"

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgmOverlays,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDL-2mFo6QYsp7qNSQl95AzhVZ6njRsLtE'
    }),
    CallPageRoutingModule
  ],
  declarations: [CallPage]
})
export class CallPageModule {}
