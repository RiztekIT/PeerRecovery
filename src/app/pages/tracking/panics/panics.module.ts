import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PanicsPageRoutingModule } from './panics-routing.module';

import { PanicsPage } from './panics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PanicsPageRoutingModule
  ],
  declarations: [PanicsPage]
})
export class PanicsPageModule {}
