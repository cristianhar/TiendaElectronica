import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TiendaElectronica';

  constructor(private serviciodeautenticacion: AuthService, private router: Router) { }

  estaLogeado(): boolean {
    return this.serviciodeautenticacion.validarLogeonav();
  }

  obtenerUsuario(): string | null {
    return this.serviciodeautenticacion.obtenerUsuariobd();
  }

  desconectarse(): void {
    this.serviciodeautenticacion.deslogear();
    this.router.navigate(['/login']);
  }
}

