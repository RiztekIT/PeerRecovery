import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendarPagePageRoutingModule } from './calendar-routing.module';

import { CalendarPage } from './calendar.page';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    PipesModule,
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarPagePageRoutingModule
  ],
  declarations: [CalendarPage]
})
export class CalendarPageModule {}
