import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Voluntarios } from '../../model/voluntarios';
import { VoluntariosService } from '../../services/voluntarios.service';

@Component({
  selector: 'app-voluntarios-page',
  templateUrl: './voluntarios-page.page.html',
  styleUrls: ['./voluntarios-page.page.scss'],
})
export class VoluntariosPagePage implements OnInit {

  voluntarios: Voluntarios[] = [];

  constructor(private voluntariosService: VoluntariosService, private router: Router) { }

  ngOnInit() {
    this.getVolunteers()
  }

  getVolunteers() {
    this.voluntariosService
      .getVoluntarios()
      .subscribe((datos) => (this.voluntarios = datos));
  }

  goVoluntarioPage(id?: number) {
    this.router.navigateByUrl(`/voluntario-page${id != undefined ? '/' + id : ''}`);
  }

}
