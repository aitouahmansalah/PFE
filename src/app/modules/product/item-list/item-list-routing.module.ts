import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemListPage } from './item-list.page';

const routes: Routes = [
  {
    path: 'product-details/:code',
    loadChildren: () => import('../product-details/product-details.module').then( m => m.ProductDetailsPageModule)
  },
  {
    path: '',
    component: ItemListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemListPageRoutingModule {}
