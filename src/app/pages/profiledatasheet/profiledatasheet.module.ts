import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfiledatasheetPageRoutingModule } from './profiledatasheet-routing.module';

import { ProfiledatasheetPage } from './profiledatasheet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfiledatasheetPageRoutingModule
  ],
  declarations: [ProfiledatasheetPage]
})
export class ProfiledatasheetPageModule {}
