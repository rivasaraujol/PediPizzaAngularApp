import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  pedido?: {
    telefono: string,
    nombre?: string,
    cedula?: string,
    direccion?: string,
    img: string,
    platos: [{
      cantidad: number,
      nombre: string,
      descripcion: string,
      precio: number,
      img: string
    }]
  }

  constructor(protected http: HttpClient) {}

  GetPedidos() {
    return this.http.get('http://localhost:3018/api/pedido');
  }

  PostPedidos() {
    return this.http.post('http://localhost:3018/api/pedido', this.pedido);
  }

  GetUnSoloPedido(id: number) {
    return this.http.get('http://localhost:3018/api/pedido/' + id);
  }

  DeletePedido(id: number) {
    return this.http.delete('http://localhost:3018/api/pedido/' + id);
  }

  GetPlatosDelPedido(id: number) {
    return this.http.get('http://localhost:3018/api/pedido/' + id + '/platos');
  }

  ValidarPedido(id: number){
    return this.http.get('http://localhost:3018/api/aprobar/' + id);
  }
}
