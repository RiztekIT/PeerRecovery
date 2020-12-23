import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuyMedicinePageRoutingModule } from './buy-medicine-routing.module';

import { BuyMedicinePage } from './buy-medicine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuyMedicinePageRoutingModule
  ],
  declarations: [BuyMedicinePage]
})
export class BuyMedicinePageModule {}
