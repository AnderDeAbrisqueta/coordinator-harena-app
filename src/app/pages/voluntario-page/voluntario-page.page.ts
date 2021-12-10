import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Voluntarios } from '../../model/voluntarios';
import { VoluntariosService } from '../../services/voluntarios.service';

@Component({
  selector: 'app-voluntario-page',
  templateUrl: './voluntario-page.page.html',
  styleUrls: ['./voluntario-page.page.scss'],
})
export class VoluntarioPagePage implements OnInit {
  voluntario: Voluntarios = {
    avatar: '',
    first_name: '',
    last_name: '',
    gender: '',
    phone: '',
    street_address: '',
    description: '',
  };

  constructor(private voluntariosService: VoluntariosService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id != null) {
      this.voluntariosService.getVoluntario(+id).subscribe((datos) => this.voluntario = datos);
    }
  }

}
