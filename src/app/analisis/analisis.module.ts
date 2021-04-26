import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnalisisPageRoutingModule } from './analisis-routing.module';

import { AnalisisPage } from './analisis.page';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnalisisPageRoutingModule,
    AgGridModule.withComponents([])
  ],
  declarations: [AnalisisPage]
})
export class AnalisisPageModule {}
