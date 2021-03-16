import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  private platospedidos = [
    {id: 0, nombre: 'pizza de pollo', descripcion: 'masa fina, salsa, queso y pollo', precio: 4.20, img: 'img', existencia: 1},
    {id: 1, nombre: 'pizza de pollo', descripcion: 'masa fina, salsa, queso y pollo', precio: 4.20, img: 'img', existencia: 1},
    {id: 2, nombre: 'pizza de pollo', descripcion: 'masa fina, salsa, queso y pollo', precio: 4.20, img: 'img', existencia: 1}
  ];

  public pedidos = [
    {id: 0, idusuario: 1, img: 'img', validado: false, platospedidos: this.platospedidos},
    {id: 1, idusuario: 1, img: 'img', validado: false, platospedidos: this.platospedidos},
    {id: 2, idusuario: 1, img: 'img', validado: false, platospedidos: this.platospedidos}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
