import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AdultosMayores } from 'src/app/model/adultos-mayores';
import { AdultosMayoresService } from 'src/app/services/adultos-mayores.service';

@Component({
  selector: 'app-adultos-mayores-page',
  templateUrl: './adultos-mayores-page.page.html',
  styleUrls: ['./adultos-mayores-page.page.scss'],
})
export class AdultosMayoresPagePage implements OnInit {
  constructor(
    private adultosMayoresService: AdultosMayoresService,
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {}

  goAdultoPage(id?: number) {
    this.router.navigateByUrl(
      `/adulto-mayor-page${id != undefined ? '/' + id : ''}`
    );
  }
  goEditAdultoPage(id?: number) {
    this.router.navigateByUrl(`/edit${id != undefined ? '/' + id : ''}`);
  }

  deleteAdultoMayor(id: number) {
    this.adultosMayoresService.deleteAdultoMayor(id);
  }

  async presentAlertConfirm(adulto: AdultosMayores) {
    const alert = await this.alertController.create({
      header: 'Borrar Adulto Mayor',
      message: `¿Estás seguro que quieres borrar a <strong>${adulto.last_name}</strong>? será borrado permanentemente!!!`,
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
            this.deleteAdultoMayor(adulto.id);
            console.log('Confirm Ok');
          },
        },
      ],
    });

    await alert.present();
  }
}
