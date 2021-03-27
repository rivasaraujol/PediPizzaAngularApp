import { Component, OnInit } from '@angular/core';
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

  constructor(protected pedidosService: PedidosService) {
    pedidosService.GetPedidos().subscribe((ped: any) => {
      this.pedidosB = ped;
      if (this.pedidosB.length > 0){
        this.pedidosB.forEach((o: Pedido) => {
          if (o.validado === 1){
            this.pedidos.push(o);
          }
          if(this.pedidos.length > 0){
            pedidosService.GetPlatosDelPedido(o.id).subscribe((plat: any) => {
              this.pedidos[o.id - 1].platosPedidos = plat;
            })
          }
        })
      }
    })
   }

  ngOnInit(): void {
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

  Search(): void {
    this.pedidos = [];
    if (this.busqueda !== ''){
      this.pedidosB.forEach(o => {
        if (o.validado === 1 && o.nombre && o.nombre.toLocaleLowerCase().includes(this.busqueda.toLocaleLowerCase())){
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
