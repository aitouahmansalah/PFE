import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductDetailsPage } from './product-details.page';

const routes: Routes = [
  {
    path: '',
    component: ProductDetailsPage
  },
  {
    path: 'nutri-score',
    loadChildren: () => import('./nutri-score/nutri-score.module').then( m => m.NutriScorePageModule)
  },
  {
    path: 'tableau-nutritionnel',
    loadChildren: () => import('./tableau-nutritionnel/tableau-nutritionnel.module').then( m => m.TableauNutritionnelPageModule)
  },
  {
    path: 'ingrediant',
    loadChildren: () => import('./ingrediant/ingrediant.module').then( m => m.IngrediantPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductDetailsPageRoutingModule {}
