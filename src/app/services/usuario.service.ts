import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private urlApi = 'http://localhost:8080/usuarios'

  constructor(private httpClient: HttpClient) { }

  registrarUsuario(usuario: any):Observable<any>{
    return this.httpClient.post<any>(this.urlApi, usuario);
  }
  getUsuarios(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.urlApi);
  }
}
