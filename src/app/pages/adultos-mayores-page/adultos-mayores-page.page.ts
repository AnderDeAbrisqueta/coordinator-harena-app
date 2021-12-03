import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdultosMayores } from 'src/app/model/adultos-mayores';
import { AdultosMayoresService } from 'src/app/services/adultos-mayores.service';

@Component({
  selector: 'app-adultos-mayores-page',
  templateUrl: './adultos-mayores-page.page.html',
  styleUrls: ['./adultos-mayores-page.page.scss'],
})
export class AdultosMayoresPagePage implements OnInit {
  adultosMayores: AdultosMayores[] = this.adultosMayoresService.getAdultosMayores();

  constructor(private adultosMayoresService: AdultosMayoresService, private router: Router) {}

  ngOnInit() {
    
  }

  goAdultoPage(id?: number) {
    this.router.navigateByUrl(`/adulto-mayor-page${id != undefined ? '/' + id : ''}`);
  }
}
