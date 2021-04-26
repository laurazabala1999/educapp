import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TareascompletadasPageRoutingModule } from './tareascompletadas-routing.module';

import { TareascompletadasPage } from './tareascompletadas.page';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TareascompletadasPageRoutingModule,
    AgGridModule.withComponents([])
  ],
  declarations: [TareascompletadasPage]
})
export class TareascompletadasPageModule {}
