import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Voluntarios } from 'src/app/model/voluntarios';
import { VoluntariosService } from 'src/app/services/voluntarios.service';

@Component({
  selector: 'app-edit-volunteer',
  templateUrl: './edit-volunteer.page.html',
  styleUrls: ['./edit-volunteer.page.scss'],
})
export class EditVolunteerPage implements OnInit {
  voluntario: Voluntarios = {
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
    private voluntariosService: VoluntariosService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id != null) {
      this.voluntariosService
        .getVoluntario(+id)
        .subscribe((datos) => (this.voluntario = datos));
    }
  }

  saveVoluntario() {
    this.voluntariosService.saveVoluntario(this.voluntario);
    this.router.navigateByUrl('/voluntarios-page');
  }
}
