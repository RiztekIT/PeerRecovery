import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { EmotionsPageModule } from '../emotions/emotions.module';

@NgModule({
  imports: [
    PipesModule,
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    EmotionsPageModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
