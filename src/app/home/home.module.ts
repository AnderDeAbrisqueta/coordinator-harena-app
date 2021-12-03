import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

//Import Menu component
import { MenuComponent } from '../components/menu/menu.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  //Insert MenuComponent into declarations
  declarations: [HomePage, MenuComponent]
})
export class HomePageModule {}
