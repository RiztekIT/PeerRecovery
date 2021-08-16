import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmotionsPageRoutingModule } from './emotions-routing.module';

import { EmotionsPage } from './emotions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmotionsPageRoutingModule
  ],
  declarations: [EmotionsPage]
})
export class EmotionsPageModule {}
