import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableauNutritionnelPage } from './tableau-nutritionnel.page';

const routes: Routes = [
  {
    path: '',
    component: TableauNutritionnelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TableauNutritionnelPageRoutingModule {}
