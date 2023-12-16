// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventarioComponent } from './inventario/inventario.component';
import { FacultadComponent } from './facultad/facultad.component';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';

const routes: Routes = [
  { path: '', component: FacultadComponent }, 
  { path: 'inicio', component: FacultadComponent }, 
  { path: 'inventario', component: InventarioComponent },
  { path: 'notificaciones', component: NotificacionesComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
