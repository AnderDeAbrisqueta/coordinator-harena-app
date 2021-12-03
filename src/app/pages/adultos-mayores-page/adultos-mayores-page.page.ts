import { Component, OnInit } from '@angular/core';
import { AdultosMayores } from 'src/app/model/adultos-mayores';
import { AdultosMayoresService } from 'src/app/services/adultos-mayores.service';

@Component({
  selector: 'app-adultos-mayores-page',
  templateUrl: './adultos-mayores-page.page.html',
  styleUrls: ['./adultos-mayores-page.page.scss'],
})
export class AdultosMayoresPagePage implements OnInit {

  adultosMayores: AdultosMayores[] = [];

  constructor(private adultosMayoresServices: AdultosMayoresService) 
     { }

  ngOnInit() {
    this.getAdultos();
  }

  getAdultos(){
    this.adultosMayoresServices.getAdultosMayores().subscribe(datos => this.adultosMayores = datos);
  }
}
