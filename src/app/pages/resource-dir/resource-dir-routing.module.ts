import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResourceDirPage } from './resource-dir.page';

const routes: Routes = [
  {
    path: '',
    component: ResourceDirPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResourceDirPageRoutingModule {}
