import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductDetailsPageRoutingModule } from './product-details-routing.module';

import { ProductDetailsPage } from './product-details.page';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { ProductService } from 'src/app/shared/shared/product.service';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductDetailsPageRoutingModule,
    SharedModule
  ],
  declarations: [ProductDetailsPage],
  providers:[ProductService]
})
export class ProductDetailsPageModule {}
