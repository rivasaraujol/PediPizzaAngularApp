import { Component, OnInit } from '@angular/core';
import {CartaService} from "../shared/carta/carta.service";

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

  constructor(protected cartaService: CartaService) {
    cartaService.GetCarta().subscribe(o => {
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
  }

  EliminarPizza(pos: number): void {
    this.pedido.splice(pos, 1);
    this.CalcularMontoTotal();
  }

  Pagar(): void {
    console.log('pagado');
  }
}

