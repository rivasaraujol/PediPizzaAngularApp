import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(protected http: HttpClient) { }

  Login(telefono: string, pass: string): Observable<any> {
    let body = {telefono: telefono, pass: pass}
    return this.http.post('http://localhost:3018/api/login', body);
  }
}
