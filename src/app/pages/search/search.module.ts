import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchPageRoutingModule } from './search-routing.module';

import { SearchPage } from './search.page';
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
    SearchPageRoutingModule
  ],
  declarations: [SearchPage]
})
export class SearchPageModule {}
