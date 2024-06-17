import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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

  constructor(
    private authService: AuthService,
    private router: Router,
    private modalService: NgbModal
  ) { }

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

    this.authService.registrobd(newUser).subscribe(success => {
      if (success) {
        this.mostrarModalRegistroExitoso();
        this.router.navigate(['/login']);
      } else {
        this.mostrarModalUsuarioExistente();
      }
    });
  }

  // Función para abrir el modal de registro exitoso
  mostrarModalRegistroExitoso(): void {
    this.modalService.open(ModalRegistroExitoso);
  }

  // Función para abrir el modal de usuario existente
  mostrarModalUsuarioExistente(): void {
    this.modalService.open(ModalUsuarioExistente);
  }
}

// Componente modal para el registro exitoso
@Component({
  template: `
    <div class="modal-body">
      <p>¡Registro exitoso!</p>
    </div>
  `
})
export class ModalRegistroExitoso { }

// Componente modal para usuario existente
@Component({
  template: `
    <div class="modal-body">
      <p>El usuario ya existe. Por favor, intenta con otro nombre de usuario.</p>
    </div>
  `
})
export class ModalUsuarioExistente { }
