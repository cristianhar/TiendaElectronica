import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private modalService: NgbModal
  ) { }

  logearse(): void {
    this.authService.validarlogeo(this.username, this.password).subscribe(success => {
      if (success) {
        this.router.navigate(['/home']);
        this.mostrarModalLoginExitoso();
      } else {
        this.mostrarModalLoginFallido();
      }
    });
  }

  formularioRegistro(): void {
    this.router.navigate(['/registro']);
  }

  // Función para abrir el modal de inicio de sesión exitoso
  mostrarModalLoginExitoso(): void {
    this.modalService.open(ModalLoginExitoso);
  }

  // Función para abrir el modal de inicio de sesión fallido
  mostrarModalLoginFallido(): void {
    this.modalService.open(ModalLoginFallido);
  }
}

// Componente modal para el inicio de sesión exitoso
@Component({
  template: `
    <div class="modal-body">
      <p>¡Inicio de sesión exitoso!</p>
    </div>
  `
})
export class ModalLoginExitoso { }

// Componente modal para el inicio de sesión fallido
@Component({
  template: `
    <div class="modal-body">
      <p>Inicio de sesión fallido. Verifica tus credenciales e intenta nuevamente.</p>
    </div>
  `
})
export class ModalLoginFallido { }