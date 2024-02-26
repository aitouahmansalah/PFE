import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngrediantPageRoutingModule } from './ingrediant-routing.module';

import { IngrediantPage } from './ingrediant.page';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngrediantPageRoutingModule,
    SharedModule
  ],
  declarations: [IngrediantPage],
  providers:[SharedModule]
})
export class IngrediantPageModule {}
