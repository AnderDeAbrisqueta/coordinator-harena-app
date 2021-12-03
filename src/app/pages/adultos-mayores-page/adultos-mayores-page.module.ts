import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdultosMayoresPagePageRoutingModule } from './adultos-mayores-page-routing.module';

import { AdultosMayoresPagePage } from './adultos-mayores-page.page';

//Import Menu component
import { MenuComponent } from 'src/app/components/menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdultosMayoresPagePageRoutingModule
  ],
  declarations: [AdultosMayoresPagePage, MenuComponent]
})
export class AdultosMayoresPagePageModule {}
