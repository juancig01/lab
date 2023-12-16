import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent {

  mostrarFormulario: boolean = false;
  mostrarFormularioEditar: boolean = false;
  formulario: FormGroup;

  constructor(private fb: FormBuilder) {
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
