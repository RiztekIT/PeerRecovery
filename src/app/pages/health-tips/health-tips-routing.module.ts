import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HealthTipsPage } from './health-tips.page';

const routes: Routes = [
  {
    path: '',
    component: HealthTipsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HealthTipsPageRoutingModule {}
