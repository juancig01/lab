import { Component } from '@angular/core';

interface Taller {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-facultad',
  templateUrl: './facultad.component.html',
  styleUrls: ['./facultad.component.css']
})
export class FacultadComponent {

  pruebas: Taller[] = [
    { id: 1, nombre: 'Ingeniería de Software' },
  ];

  talleres: Taller[] = [];
  mostrarFormularioTaller: boolean = false;

  realizarTest(taller: Taller): void {
    this.mostrarFormularioTaller = true;
  }

  crearTaller(nombre: string, id: number): void {
    const nuevoTaller: Taller = { id, nombre };
    this.talleres.push(nuevoTaller);
    this.mostrarFormularioTaller = false;
  }
}
