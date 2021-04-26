import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultarresultadosPage } from './consultarresultados.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultarresultadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultarresultadosPageRoutingModule {}
