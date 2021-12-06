import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Voluntarios } from '../../model/voluntarios';
import { VoluntariosService } from '../../services/voluntarios.service';

@Component({
  selector: 'app-voluntarios-page',
  templateUrl: './voluntarios-page.page.html',
  styleUrls: ['./voluntarios-page.page.scss'],
})
export class VoluntariosPagePage implements OnInit {
  voluntarios: Voluntarios[] = [];
  buscarTexto = '';

  constructor(
    private voluntariosService: VoluntariosService,
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.getVolunteers();
  }

  getVolunteers() {
    this.voluntariosService
      .getVoluntarios()
      .subscribe((datos) => (this.voluntarios = datos));
  }

  goVoluntarioPage(id?: number) {
    this.router.navigateByUrl(
      `/voluntario-page${id != undefined ? '/' + id : ''}`
    );
  }

  goEditVoluntarioPage(id?: number) {
    this.router.navigateByUrl(
      `/edit-volunteer${id != undefined ? '/' + id : ''}`
    );
  }

  deleteVoluntario(id: number) {
    this.voluntariosService.deleteVoluntario(id);
  }

  async presentAlertConfirm(voluntario: Voluntarios) {
    const alert = await this.alertController.create({
      header: 'Borrar Voluntario',
      message: `¿Estás seguro que quieres borrar a <strong>${voluntario.last_name}</strong>? será borrado permanentemente!!!`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          },
        },
        {
          text: 'Aceptar',
          handler: () => {
            this.deleteVoluntario(voluntario.id);
            console.log('Confirm Ok');
          },
        },
      ],
    });

    await alert.present();
  }

  buscarVoluntario(event) {
    const texto = event.target.value;
    this.buscarTexto = texto;
    
  }
}
