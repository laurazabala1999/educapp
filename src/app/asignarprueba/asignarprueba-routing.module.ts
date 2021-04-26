import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsignarpruebaPage } from './asignarprueba.page';

const routes: Routes = [
  {
    path: '',
    component: AsignarpruebaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsignarpruebaPageRoutingModule {}
