import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearpruebaPage } from './crearprueba.page';

const routes: Routes = [
  {
    path: '',
    component: CrearpruebaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearpruebaPageRoutingModule {}
