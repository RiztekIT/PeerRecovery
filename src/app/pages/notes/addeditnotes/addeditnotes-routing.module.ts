import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddeditnotesPage } from './addeditnotes.page';

const routes: Routes = [
  {
    path: '',
    component: AddeditnotesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddeditnotesPageRoutingModule {}
