import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private EstaAutenticado = false;
  private username: string | null = null;


  private apiUrl = 'http://localhost/apiv2/';

  constructor(private http: HttpClient) { }

  validarlogeo(username: string, password: string): Observable<boolean> {
    return this.http.post<any>(this.apiUrl + 'login.php', { username, password }).pipe(
      map(response => {
        if (response.success) {
          this.EstaAutenticado = true;
          this.username = response.username;
          return true; 
        } else {
          this.EstaAutenticado = false;
          this.username = null;
          return false;
        }
      })
    );
  }

  deslogear(): void {
    this.EstaAutenticado = false;
    this.username = null;
  }

  registrobd(user: any): Observable<boolean> {
    return this.http.post<any>(this.apiUrl + 'register.php', user).pipe(
      map(response => response.success)
    );
  }

  validarLogeonav(): boolean {
    return this.EstaAutenticado;
  }

  obtenerUsuariobd(): string | null {
    return this.username;
  }
}
