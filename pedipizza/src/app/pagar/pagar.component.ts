import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PedidosService } from '../shared/pedidos.service';

@Component({
  selector: 'app-pagar',
  templateUrl: './pagar.component.html',
  styleUrls: ['./pagar.component.css']
})
export class PagarComponent implements OnInit {
  
  private pedidosService: PedidosService;
  private router: Router;
  telefono = '';
  nombre = ''; 
  cedula = '';
  direccion = '';
  img = '';

  constructor(protected pS: PedidosService, protected rt: Router) { 
    this.pedidosService = pS;
    this.router = rt;
  }

  ngOnInit(): void {
  }

  Enviar(){
    if(this.pedidosService.pedido !== undefined){
      this.pedidosService.pedido.telefono = this.telefono;
      this.pedidosService.pedido.nombre = this.nombre;
      this.pedidosService.pedido.cedula = this.cedula;
      this.pedidosService.pedido.direccion = this.direccion;
      this.pedidosService.pedido.img = this.img;
      this.pedidosService.PostPedidos().subscribe();
      // NAVEGAR A RUTA DE OK
      this.router.navigate(['']);
    }
  }
}
