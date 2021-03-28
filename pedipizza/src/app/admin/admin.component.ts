import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChequeoService } from '../shared/chequeo.service';
import { PedidosService } from '../shared/pedidos.service';
import { Pedido, PlatoPedido } from '../shared/tipodatos.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public menuOpen = false;

  private pedidosB: Pedido[] = [];
  public pedidos: Pedido[] = [];
  public busqueda = '';

  constructor(protected router: Router ,protected pedidosService: PedidosService , protected chequeo: ChequeoService) {
    
    pedidosService.GetPedidos().subscribe((ped: any) => {
      this.pedidosB = ped;
      if (this.pedidosB.length > 0){
        this.pedidosB.forEach((o: Pedido) => {
          if (o.validado === 0){
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

  Validar(id: number){
    this.pedidosService.ValidarPedido(id).subscribe(o => {
      this.pedidosB.forEach(o => {
        if (o.id === id){
          o.validado = 1;
        }
      });
      this.pedidos = [];
      this.pedidosB.forEach(o => {
        if (o.validado === 0){
          this.pedidos.push(o);
        }
      });
    })
  }

  Buscar(): void {
    this.pedidos = [];
    if (this.busqueda !== ''){
      this.pedidosB.forEach(o => {
        if (o.validado === 0 && (
          o.nombre && o.nombre.toLocaleLowerCase().includes(this.busqueda.toLocaleLowerCase()) || 
          o.id && o.id.toLocaleString() == this.busqueda)){
          this.pedidos.push(o);
        }
      });
    } else {
      this.pedidosB.forEach(o => {
        if (o.validado === 0){
          this.pedidos.push(o);
        }
      });
    }
  }

  ActivarMenu(){
    this.menuOpen = !this.menuOpen;
  }
}
