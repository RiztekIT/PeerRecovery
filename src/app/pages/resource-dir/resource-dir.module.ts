import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResourceDirPageRoutingModule } from './resource-dir-routing.module';

import { ResourceDirPage } from './resource-dir.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResourceDirPageRoutingModule
  ],
  declarations: [ResourceDirPage]
})
export class ResourceDirPageModule {}
