import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RefuerzoPageRoutingModule } from './refuerzo-routing.module';

import { RefuerzoPage } from './refuerzo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RefuerzoPageRoutingModule
  ],
  declarations: [RefuerzoPage]
})
export class RefuerzoPageModule {}
