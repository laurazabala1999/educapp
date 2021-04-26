import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TareascompletadasPage } from './tareascompletadas.page';

const routes: Routes = [
  {
    path: '',
    component: TareascompletadasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TareascompletadasPageRoutingModule {}
