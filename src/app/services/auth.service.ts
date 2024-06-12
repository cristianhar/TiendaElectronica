import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  constructor() { }

  login(username: string, password: string): boolean {
    // Implementa la lógica de autenticación aquí
    this.isAuthenticated = true;
    return this.isAuthenticated;
  }

  logout(): void {
    this.isAuthenticated = false;
  }

  register(username: string, password: string): boolean {
  
    return true;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
