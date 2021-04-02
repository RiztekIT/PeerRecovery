import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorCardViewPage } from './doctor-card-view.page';

const routes: Routes = [
  {
    path: '',
    component: DoctorCardViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorCardViewPageRoutingModule {}
