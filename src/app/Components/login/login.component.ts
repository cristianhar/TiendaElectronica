import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private serviciodeautenticacion: AuthService, private router: Router) { }

  logearse(): void {
    this.serviciodeautenticacion.validarlogeo(this.username, this.password).subscribe(success => {
      if (success) {
        this.router.navigate(['/home']);
      } else {
        alert('Login fallido');
      }
    });
  }

  formularioRegistro(): void {
    this.router.navigate(['/registro']);
  }
}
