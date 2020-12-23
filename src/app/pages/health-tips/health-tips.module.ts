import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HealthTipsPageRoutingModule } from './health-tips-routing.module';

import { HealthTipsPage } from './health-tips.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HealthTipsPageRoutingModule
  ],
  declarations: [HealthTipsPage]
})
export class HealthTipsPageModule {}
