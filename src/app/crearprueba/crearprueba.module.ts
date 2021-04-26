import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearpruebaPageRoutingModule } from './crearprueba-routing.module';

import { CrearpruebaPage } from './crearprueba.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearpruebaPageRoutingModule
  ],
  declarations: [CrearpruebaPage]
})
export class CrearpruebaPageModule {}
