import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VoluntariosPagePageRoutingModule } from './voluntarios-page-routing.module';

import { VoluntariosPagePage } from './voluntarios-page.page';

//Import Menu component
import { MenuComponent } from 'src/app/components/menu/menu.component';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VoluntariosPagePageRoutingModule, 
    PipesModule
  ],
  declarations: [VoluntariosPagePage, MenuComponent]
})
export class VoluntariosPagePageModule {}
