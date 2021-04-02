import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CallUsersListPageRoutingModule } from './call-users-list-routing.module';

import { CallUsersListPage } from './call-users-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CallUsersListPageRoutingModule
  ],
  declarations: [CallUsersListPage]
})
export class CallUsersListPageModule {}
