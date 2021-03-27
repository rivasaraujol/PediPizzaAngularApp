import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CartaService} from "../shared/carta.service";
import { PedidosService } from '../shared/pedidos.service';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {

  private i = 0;
  public montoTotal = 0;
  public n = 0;
  public carritoOpen = false;
  public platos = [
    {id: 0, nombre: 'Pizza de pollo', descripcion: 'masa fina, salsa, queso y pollo', precio: 4.20, img: 'img', existencia: 1}
  ];
  public pedido: any = [];
  private pedidosService: PedidosService;
  private router: Router;

  constructor(
    protected cartaService: CartaService,
    protected pS: PedidosService,
    protected rt: Router) {
    this.pedidosService = pS;
    this.router = rt;
    cartaService.GetCarta().subscribe((o: any) => {
      this.platos = o;
    });
  }

  ngOnInit(): void {
  }

  Siguiente(): void {
    if (this.n < this.platos.length - 1){
      this.n = this.n + 1;

    }else{

    }
  }

  Anterior(): void {
    if (this.n > 0){
      this.n = this.n - 1;
    }else{

    }

  }

  ActivarCarrito(): void {
    this.carritoOpen = !this.carritoOpen;
  }

  CalcularMontoTotal(): void {
    this.montoTotal = 0;
    this.pedido.forEach((o: any) => {
     this.montoTotal += o.pizza.precio;
    });
  }

  PedidosPush(): void {
    this.pedido.push({id: this.i, pizza: this.platos[this.n]});
    this.CalcularMontoTotal();
    this.i ++;
    
    if(this.pedidosService.pedido?.platos === undefined){
      this.pedidosService.pedido = {
        telefono: '',
        img: '',
        platos: [{
          cantidad: 1,
          nombre: this.platos[this.n].nombre,
          descripcion: this.platos[this.n].descripcion,
          precio: this.platos[this.n].precio,
          img: this.platos[this.n].img
        }]
      }
    }
    else {
      let flip = false;
      this.pedidosService.pedido.platos.forEach(p => {
        if(p.nombre === this.platos[this.n].nombre){
          p.cantidad += 1;
          flip = true;
        }
      })
      if (!flip) {
        this.pedidosService.pedido?.platos.push({
          cantidad: 1,
          nombre: this.platos[this.n].nombre,
          descripcion: this.platos[this.n].descripcion,
          precio: this.platos[this.n].precio,
          img: this.platos[this.n].img
        });
      }
    }
  }

  EliminarPizza(pos: number): void {
    this.pedido.splice(pos, 1);
    this.CalcularMontoTotal();
  }

  Pagar(): void {
    this.router.navigate(['pagar']);
  }
}