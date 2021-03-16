import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {

  public platos = [
    {id: 0, nombre: 'pizza de pollo', descripcion: 'masa fina, salsa, queso y pollo', precio: 4.20, img: 'img', existencia: 1},
    {id: 1, nombre: 'pizza de pollo', descripcion: 'masa fina, salsa, queso y pollo', precio: 4.20, img: 'img', existencia: 1},
    {id: 2, nombre: 'pizza de pollo', descripcion: 'masa fina, salsa, queso y pollo', precio: 4.20, img: 'img', existencia: 1}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
