import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddeditnotesPageRoutingModule } from './addeditnotes-routing.module';

import { AddeditnotesPage } from './addeditnotes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddeditnotesPageRoutingModule
  ],
  declarations: [AddeditnotesPage]
})
export class AddeditnotesPageModule {}
