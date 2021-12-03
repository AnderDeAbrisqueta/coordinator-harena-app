import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdultoMayorPagePage } from './adulto-mayor-page.page';

const routes: Routes = [
  {
    path: '',
    component: AdultoMayorPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdultoMayorPagePageRoutingModule {}
