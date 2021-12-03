import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VoluntariosPagePage } from './voluntarios-page.page';

const routes: Routes = [
  {
    path: '',
    component: VoluntariosPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VoluntariosPagePageRoutingModule {}
