import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NutriScorePageRoutingModule } from './nutri-score-routing.module';

import { NutriScorePage } from './nutri-score.page';
import { SharedModule } from 'src/app/shared/shared/shared.module';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NutriScorePageRoutingModule,
    SharedModule

  ],
  declarations: [NutriScorePage]
})
export class NutriScorePageModule {}
