import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TableauNutritionnelPageRoutingModule } from './tableau-nutritionnel-routing.module';

import { TableauNutritionnelPage } from './tableau-nutritionnel.page';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { ProductService } from 'src/app/shared/shared/product.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TableauNutritionnelPageRoutingModule,
    SharedModule

  ],
  declarations: [TableauNutritionnelPage],
})
export class TableauNutritionnelPageModule {}
