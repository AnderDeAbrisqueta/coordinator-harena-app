import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VoluntarioPagePageRoutingModule } from './voluntario-page-routing.module';

import { VoluntarioPagePage } from './voluntario-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VoluntarioPagePageRoutingModule
  ],
  declarations: [VoluntarioPagePage]
})
export class VoluntarioPagePageModule {}
