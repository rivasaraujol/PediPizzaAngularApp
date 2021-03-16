import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  public pedido = [
    {id: 0},
    {id: 1},
    {id: 2}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
