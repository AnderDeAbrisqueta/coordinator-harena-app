import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'adulto-mayor-page',
    loadChildren: () => import('./pages/adulto-mayor-page/adulto-mayor-page.module').then( m => m.AdultoMayorPagePageModule)
  },
  {
    path: 'adulto-mayor-page/:id',
    loadChildren: () => import('./pages/adulto-mayor-page/adulto-mayor-page.module').then( m => m.AdultoMayorPagePageModule)
  },
  {
    path: 'adultos-mayores-page',
    loadChildren: () => import('./pages/adultos-mayores-page/adultos-mayores-page.module').then( m => m.AdultosMayoresPagePageModule)
  },
  {
    path: 'voluntario-page',
    loadChildren: () => import('./pages/voluntario-page/voluntario-page.module').then( m => m.VoluntarioPagePageModule)
  },
  {
    path: 'voluntario-page/:id',
    loadChildren: () => import('./pages/voluntario-page/voluntario-page.module').then( m => m.VoluntarioPagePageModule)
  },
  {
    path: 'voluntarios-page',
    loadChildren: () => import('./pages/voluntarios-page/voluntarios-page.module').then( m => m.VoluntariosPagePageModule)
  },
  {
    path: 'formulario-page',
    loadChildren: () => import('./pages/formulario-page/formulario-page.module').then( m => m.FormularioPagePageModule)
  },
  {
    path: 'edit',
    loadChildren: () => import('./pages/edit/edit.module').then( m => m.EditPageModule)
  },
  {
    path: 'edit/:id',
    loadChildren: () => import('./pages/edit/edit.module').then( m => m.EditPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
