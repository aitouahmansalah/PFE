import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngrediantPage } from './ingrediant.page';

const routes: Routes = [
  {
    path: '',
    component: IngrediantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngrediantPageRoutingModule {}
