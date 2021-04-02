import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctorCardViewPageRoutingModule } from './doctor-card-view-routing.module';

import { DoctorCardViewPage } from './doctor-card-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoctorCardViewPageRoutingModule
  ],
  declarations: [DoctorCardViewPage]
})
export class DoctorCardViewPageModule {}
