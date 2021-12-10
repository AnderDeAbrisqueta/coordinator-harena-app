import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdultoMayorPagePageRoutingModule } from './adulto-mayor-page-routing.module';

import { AdultoMayorPagePage } from './adulto-mayor-page.page';
import { MenuComponent } from 'src/app/components/menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdultoMayorPagePageRoutingModule
  ],
  declarations: [AdultoMayorPagePage, MenuComponent]
})
export class AdultoMayorPagePageModule {}
