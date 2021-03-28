import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChequeoService } from '../shared/chequeo.service';
import { PedidosService } from '../shared/pedidos.service';
import { Pedido, PlatoPedido } from '../shared/tipodatos.model';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  public menuOpen = false;

  private pedidosB: Pedido[] = [];
  public pedidos: Pedido[] = [];
  public busqueda = '';

  constructor(protected router: Router,protected chequeo: ChequeoService,protected pedidosService: PedidosService) {
    pedidosService.GetPedidos().subscribe((ped: any) => {
      this.pedidosB = ped;
      if (this.pedidosB.length > 0){
        this.pedidosB.forEach((o: Pedido) => {
          if (o.validado === 1){
            this.pedidos.push(o);
          }
        })
        for ( let i = 0; i < this.pedidos.length; i++){
          pedidosService.GetPlatosDelPedido(this.pedidos[i].id).subscribe((plat: any) => {
            this.pedidos[i].platosPedidos = plat;
          })
        }
      }
    })
   }

  ngOnInit(): void {
    if(!this.chequeo.LeerGalleta()){
      this.router.navigate(['']);
    }
  }

  CalcularTotal(platos: PlatoPedido[]){
    let returnValue = 0
    if (platos != undefined) {
      platos.forEach((o: PlatoPedido) => {
        returnValue += o.precio * o.cantidad;
      })
    }
    return returnValue;
  }

  Buscar(): void {
    this.pedidos = [];
    if (this.busqueda !== ''){
      this.pedidosB.forEach(o => {
        if (o.validado === 1 && ( 
          o.nombre && o.nombre.toLocaleLowerCase().includes(this.busqueda.toLocaleLowerCase())) ||
          o.id && o.id.toLocaleString() === this.busqueda){
          this.pedidos.push(o);
        }
      });
    } else {
      this.pedidosB.forEach(o => {
        if (o.validado === 1){
          this.pedidos.push(o);
        }
      });
    }
  }

  ActivarMenu(){
    this.menuOpen = !this.menuOpen;
  }
}
