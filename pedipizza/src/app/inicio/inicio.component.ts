import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public errorvista = false;
  constructor() { }

  ngOnInit(): void {
  }
  Loguear(): void{
    this.errorvista = !this.errorvista;
  }
}
