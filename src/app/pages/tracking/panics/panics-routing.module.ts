import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PanicsPage } from './panics.page';

const routes: Routes = [
  {
    path: '',
    component: PanicsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanicsPageRoutingModule {}
