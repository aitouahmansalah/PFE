import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { LoadingSpinerComponent } from './loading-spiner/loading-spiner.component';




@NgModule({
  declarations: [HeaderComponent,LoadingSpinerComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    HeaderComponent,
    LoadingSpinerComponent,
  ]
})
export class SharedModule { }
