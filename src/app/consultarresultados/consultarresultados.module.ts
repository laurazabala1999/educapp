import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultarresultadosPageRoutingModule } from './consultarresultados-routing.module';

import { ConsultarresultadosPage } from './consultarresultados.page';
import { AgGridModule } from 'ag-grid-angular';
import { AgChartsAngularModule } from 'ag-charts-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultarresultadosPageRoutingModule,
    AgGridModule.withComponents([]),
    AgChartsAngularModule
  ],
  declarations: [ConsultarresultadosPage]
})
export class ConsultarresultadosPageModule {}
