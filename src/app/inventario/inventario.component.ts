import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent {

  mostrarFormulario: boolean = false;
  mostrarFormularioEditar: boolean = false;
  formulario: FormGroup;
  //productoDisponible: boolean = true;
  //productoDisponible2: boolean = true;
  //productoDisponible3: boolean = true;
  unidades: number = 5;
  unidades2: number = 5;
  unidades3: number = 5;
  mensajeAlerta: string = "";

  constructor(private fb: FormBuilder, private modalService: NgbModal) {
    // Inicializa el formulario con controles y validadores
    this.formulario = this.fb.group({
      nombreProducto: ['', Validators.required],
      idProducto: ['', Validators.required]
    });
  }

  // Método para cambiar la visibilidad del formulario
  agregarProducto() {
    this.mostrarFormulario = !this.mostrarFormulario;
  }

  editarProducto() {
    this.mostrarFormularioEditar = !this.mostrarFormularioEditar;
  }

  venderProducto() {
    if (this.unidades > 0) {
      this.unidades--;
    } else {
      this.mensajeAlerta = 'No hay unidades CENTRUM disponibles.';
      this.mostrarAlerta();
    }
  }

  venderProducto2() {
    if (this.unidades2 > 0) {
      this.unidades2--;
    } else {
      this.mensajeAlerta = 'No hay unidades BOTOX disponibles.';
      this.mostrarAlerta();
    }
  }

  venderProducto3() {
    if (this.unidades3 > 0) {
      this.unidades3--;
    } else {
      this.mensajeAlerta = 'No hay unidades ENGYSTOL disponibles.';
      this.mostrarAlerta();
    }
  }
  mostrarAlerta() {
    this.modalService.open('Alerta unidades agotadas', { centered: true });
  }

  // Método para manejar la acción de guardar el producto
  guardarProducto() {
    // if (this.formulario.valid) {
    //   // Realiza acciones con los valores del formulario
    //   const nombreProducto = this.formulario.get('nombreProducto').value;
    //   const idProducto = this.formulario.get('idProducto').value;

    //   // Aquí puedes realizar acciones adicionales con los valores

    //   // Reinicia el formulario
    //   this.formulario.reset();

    //   // Oculta el formulario después de guardar
    //   this.mostrarFormulario = false;
    // }
  }
}
