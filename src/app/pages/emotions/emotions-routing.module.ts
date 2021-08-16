import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmotionsPage } from './emotions.page';

const routes: Routes = [
  {
    path: '',
    component: EmotionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmotionsPageRoutingModule {}
