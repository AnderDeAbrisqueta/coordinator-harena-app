import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdultosMayores } from 'src/app/model/adultos-mayores';
import { AdultosMayoresService } from 'src/app/services/adultos-mayores.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
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
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id != null) {
      this.adultoMayor = this.adultosMayoresService.getAdulto(+id);
    }
  }

  saveAdultoMayor() {
    this.adultosMayoresService.saveAdultoMayor(this.adultoMayor);
    this.router.navigateByUrl('/adultos-mayores-page');
  }
}
