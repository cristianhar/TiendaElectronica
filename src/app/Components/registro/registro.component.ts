import { Component } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  username = '';
  password = '';
  nombre = '';
  apellido = '';
  edad = '';
  correo = '';
  telefono = '';
  direccion = '';
  fecha = '';
  genero = '';

  constructor() { }

  onSubmit(): void {
  
    alert('Registro exitoso');
  }
}
