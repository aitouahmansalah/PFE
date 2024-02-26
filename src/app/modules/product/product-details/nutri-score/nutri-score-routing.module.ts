import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NutriScorePage } from './nutri-score.page';

const routes: Routes = [
  {
    path: '',
    component: NutriScorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NutriScorePageRoutingModule {}
