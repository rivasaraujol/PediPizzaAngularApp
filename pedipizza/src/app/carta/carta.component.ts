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
  public agregado=true;
  public EliminadoA = [false];
  public n = 0;
  public carritoOpen = false;
  private platosB: any = [];
  public platos: any = [];
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
      this.platosB = o;
      o.forEach((pizza: any) => {
        if (pizza.existencia !== 0){
          this.platos.push(pizza);
        }
      })
    })
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
    this.EliminadoA = [];
    this.pedido.forEach((o: any) => {
      this.EliminadoA.push(false);
     this.montoTotal += o.pizza.precio;
    });
  }

  PedidosPush(): void {
    this.pedido.push({id: this.i, pizza: this.platos[this.n]});
    this.CalcularMontoTotal();
    this.i ++;
    this.agregado = !this.agregado;
    setTimeout(() => 
    {
    this.agregado = !this.agregado;
    },
    500); 
    
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
    this.platos[this.n].existencia -= 1;
    if (this.platos[this.n].existencia === 0 && this.n > 0){
      this.n -= 1;
    }
    this.platos = [];
    this.platosB.forEach((pizza: any) => {
      if (pizza.existencia !== 0){
        this.platos.push(pizza);
      }
    })
  }

  EliminarPizza(pos: number): void {
    this.EliminadoA[pos] = !this.EliminadoA[pos];
    setTimeout(() => 
    {
      this.platosB.forEach((pizza: any) => {
        if (pizza.nombre.includes(this.pedido[pos].pizza.nombre)){
          pizza.existencia +=1;
        }
      })
      this.platos = [];
      this.platosB.forEach((pizza: any) => {
        if (pizza.existencia !== 0){
          this.platos.push(pizza);
        }
      })
      this.pedido.splice(pos, 1);
      this.CalcularMontoTotal();
      
    },
    500); 
    
  }

  Pagar(): void {
    if (this.pedido.length > 0){
      this.router.navigate(['pagar']);
    }
  }
}