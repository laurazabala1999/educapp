import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsignarpruebaPageRoutingModule } from './asignarprueba-routing.module';

import { AsignarpruebaPage } from './asignarprueba.page';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsignarpruebaPageRoutingModule,
    AgGridModule.withComponents([])
  ],
  declarations: [AsignarpruebaPage]
})
export class AsignarpruebaPageModule {}
