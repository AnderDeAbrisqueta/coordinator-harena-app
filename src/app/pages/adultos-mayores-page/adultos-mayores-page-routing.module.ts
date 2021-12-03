import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdultosMayoresPagePage } from './adultos-mayores-page.page';

const routes: Routes = [
  {
    path: '',
    component: AdultosMayoresPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdultosMayoresPagePageRoutingModule {}
