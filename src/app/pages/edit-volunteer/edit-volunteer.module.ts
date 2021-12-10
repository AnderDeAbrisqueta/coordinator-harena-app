import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditVolunteerPageRoutingModule } from './edit-volunteer-routing.module';

import { EditVolunteerPage } from './edit-volunteer.page';
import { MenuComponent } from 'src/app/components/menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditVolunteerPageRoutingModule
  ],
  declarations: [EditVolunteerPage, MenuComponent]
})
export class EditVolunteerPageModule {}
