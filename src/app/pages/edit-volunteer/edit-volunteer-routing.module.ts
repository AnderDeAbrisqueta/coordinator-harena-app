import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditVolunteerPage } from './edit-volunteer.page';

const routes: Routes = [
  {
    path: '',
    component: EditVolunteerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditVolunteerPageRoutingModule {}
