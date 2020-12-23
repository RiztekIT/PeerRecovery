import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuyMedicinePage } from './buy-medicine.page';

const routes: Routes = [
  {
    path: '',
    component: BuyMedicinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuyMedicinePageRoutingModule {}
