import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  goAdultoMayoresPage() {
    this.router.navigateByUrl('/adultos-mayores-page')
  }
  goVoluntariosPage() {
    this.router.navigateByUrl('/voluntarios-page')
  }
  goFormularioPage() {
    this.router.navigateByUrl('/formulario-page')
  }

}
