import { NgModule } from '@angular/core';

import { BarcodeScanningRoutingModule } from './barcode-scanning-routing.module';

import { SharedTestingModule } from '@tests/modules';
import { BarcodeScanningModalComponent } from './barcode-scanning-modal.component';
import { BarcodeScanningPage } from './barcode-scanning.page';
import { HttpClientModule } from '@angular/common/http';
import { CodeService } from './code.service';

@NgModule({
  imports: [SharedTestingModule, BarcodeScanningRoutingModule,HttpClientModule],
  declarations: [BarcodeScanningPage, BarcodeScanningModalComponent],
})
export class BarcodeScanningModule {}
