import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormularioPagePage } from './formulario-page.page';

const routes: Routes = [
  {
    path: '',
    component: FormularioPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormularioPagePageRoutingModule {}
