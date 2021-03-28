import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Pizza } from './tipodatos.model';

@Injectable({
  providedIn: 'root'
})
export class CartaService {

  constructor(protected http: HttpClient) { }

  GetCarta(){
    return this.http.get('http://localhost:3018/api/carta');
  }

  PostCarta(nombre:string, descripcion: string, img: string, precio: number, cantidad: number){
    let body = {nombre: nombre, descripcion: descripcion, precio: precio, img: img, existencia: cantidad};
    return this.http.post('http://localhost:3018/api/carta', body);
  }

  DeleteCarta(id: number){
    return this.http.delete('http://localhost:3018/api/carta/' + id)
  }

  PutCarta(pizza: Pizza){
    let body = {nombre: pizza.nombre, descripcion: pizza.descripcion, precio: pizza.precio, img: pizza.img, existencia: pizza.existencia};
    return this.http.put('http://localhost:3018/api/carta/' + pizza.id, body)
  }

  Buscar(buscar: string){
    return this.http.get('http://localhost:3018/api/carta/' + buscar);
  }
}
