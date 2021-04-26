import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'crearprueba',
    loadChildren: () => import('./crearprueba/crearprueba.module').then( m => m.CrearpruebaPageModule)
  },
  {
    path: 'asignarprueba',
    loadChildren: () => import('./asignarprueba/asignarprueba.module').then( m => m.AsignarpruebaPageModule)
  },
  {
    path: 'consultarresultados',
    loadChildren: () => import('./consultarresultados/consultarresultados.module').then( m => m.ConsultarresultadosPageModule)
  },
  {
    path: 'analisis',
    loadChildren: () => import('./analisis/analisis.module').then( m => m.AnalisisPageModule)
  },
  {
    path: 'tareaspendientes',
    loadChildren: () => import('./tareaspendientes/tareaspendientes.module').then( m => m.TareaspendientesPageModule)
  },
  {
    path: 'tareascompletadas',
    loadChildren: () => import('./tareascompletadas/tareascompletadas.module').then( m => m.TareascompletadasPageModule)
  },
  {
    path: 'avisos',
    loadChildren: () => import('./avisos/avisos.module').then( m => m.AvisosPageModule)
  },
  {
    path: 'refuerzo',
    loadChildren: () => import('./refuerzo/refuerzo.module').then( m => m.RefuerzoPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
