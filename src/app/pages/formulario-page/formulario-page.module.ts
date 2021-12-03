import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormularioPagePageRoutingModule } from './formulario-page-routing.module';

import { FormularioPagePage } from './formulario-page.page';

//Import Menu component
import { MenuComponent } from 'src/app/components/menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormularioPagePageRoutingModule
  ],
  declarations: [FormularioPagePage, MenuComponent]
})
export class FormularioPagePageModule {}
