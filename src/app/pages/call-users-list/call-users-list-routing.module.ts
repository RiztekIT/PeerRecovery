import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CallUsersListPage } from './call-users-list.page';

const routes: Routes = [
  {
    path: '',
    component: CallUsersListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CallUsersListPageRoutingModule {}
