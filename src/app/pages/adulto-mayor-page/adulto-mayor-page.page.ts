import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdultosMayores } from 'src/app/model/adultos-mayores';
import { AdultosMayoresService } from 'src/app/services/adultos-mayores.service';

@Component({
  selector: 'app-adulto-mayor-page',
  templateUrl: './adulto-mayor-page.page.html',
  styleUrls: ['./adulto-mayor-page.page.scss'],
})
export class AdultoMayorPagePage implements OnInit {
  adultoMayor: AdultosMayores = {
    id: 0,
    avatar: '',
    first_name: '',
    last_name: '',
    gender: '',
    phone: '',
    street_address: '',
    description: '',
  };

  constructor(
    private adultosMayoresService: AdultosMayoresService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id != null) {
      this.adultoMayor = this.adultosMayoresService.getAdulto(+id);
    }
  }
}
