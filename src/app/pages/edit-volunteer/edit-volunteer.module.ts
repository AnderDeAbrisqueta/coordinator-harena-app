import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditVolunteerPageRoutingModule } from './edit-volunteer-routing.module';

import { EditVolunteerPage } from './edit-volunteer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditVolunteerPageRoutingModule
  ],
  declarations: [EditVolunteerPage]
})
export class EditVolunteerPageModule {}
