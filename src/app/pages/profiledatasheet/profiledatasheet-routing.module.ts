import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfiledatasheetPage } from './profiledatasheet.page';

const routes: Routes = [
  {
    path: '',
    component: ProfiledatasheetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfiledatasheetPageRoutingModule {}
