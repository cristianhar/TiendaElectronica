import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
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

  constructor(private serviciodeautenticacion: AuthService, private router: Router) { }

  registrarse(): void {
    const newUser = {
      username: this.username,
      password: this.password,
      nombre: this.nombre,
      apellido: this.apellido,
      edad: this.edad,
      correo: this.correo,
      telefono: this.telefono,
      direccion: this.direccion,
      fecha: this.fecha,
      genero: this.genero
    };

    this.serviciodeautenticacion.registrobd(newUser).subscribe(success => {
      if (success) {
        alert('Registro exitoso');
        this.router.navigate(['/login']);
      } else {
        alert('El usuario ya existe');
      }
    });
  }
}
