import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TareaspendientesPageRoutingModule } from './tareaspendientes-routing.module';

import { TareaspendientesPage } from './tareaspendientes.page';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TareaspendientesPageRoutingModule,
    AgGridModule.withComponents([])

  ],
  declarations: [TareaspendientesPage]
})
export class TareaspendientesPageModule {}
