import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VoluntarioPagePage } from './voluntario-page.page';

const routes: Routes = [
  {
    path: '',
    component: VoluntarioPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VoluntarioPagePageRoutingModule {}
