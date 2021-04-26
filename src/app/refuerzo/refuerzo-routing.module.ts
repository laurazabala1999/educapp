import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RefuerzoPage } from './refuerzo.page';

const routes: Routes = [
  {
    path: '',
    component: RefuerzoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RefuerzoPageRoutingModule {}
