import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartaService } from '../shared/carta.service';
import { ChequeoService } from '../shared/chequeo.service';
import { Pizza } from '../shared/tipodatos.model';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {

  private cartaService: CartaService;

  public menuOpen = false;
  public agregarOpen = false;
  public editOpen = false;

  public editPizza: Pizza = {id: 0, nombre: '', descripcion: '', precio: 0, img: '', existencia: 0};
  public buscar = '';
  public nombre = '';
  public descripcion = '';
  public cantidad = 0;
  public img = './assets/img/PAG2/pizza.png';
  public precio = 0;
  private index = 0;
  public platos: Pizza[] = [];
  private platosB: Pizza[] = [];

  constructor(protected router: Router, protected chequeo: ChequeoService, protected cS: CartaService) { 
    this.cartaService = cS;
    cS.GetCarta().subscribe((o: any) => {
      this.platos = o;
      this.platosB = o;
    })
  }

  ngOnInit(): void {
    if(!this.chequeo.LeerGalleta()){
      this.router.navigate(['']);
    }
  }
  
  AgregarPizza(){
    this.cartaService.PostCarta(this.nombre, this.descripcion, this.img, this.precio, this.cantidad).subscribe(o => {
      this.cartaService.GetCarta().subscribe((o: any) => {
        this.platos = o;
      })
    });
    this.ActivarAgregar();
    this.LimpiarCampos();
  }

  ActualizarPizza(){
    this.cartaService.PutCarta(this.editPizza).subscribe(o => {
        for(var i in this.platos){
          if (this.platos[i].id == this.editPizza.id){
            this.platos[i] = this.editPizza;
            break;
          }
        }
      this.ActivarEdit(0,0, undefined);
    })
  }

  BorrarPizza(){
    this.cartaService.DeleteCarta(this.editPizza.id).subscribe(o => {
      this.platos.splice(this.index, 1);
      this.ActivarEdit(0,0, undefined);
    })
  }

  Buscar(){
    if(this.buscar !== ''){
      let aux: Pizza[] = [];
      this.platosB.forEach(o => {
        if (o.nombre.toLocaleLowerCase().includes(this.buscar.toLocaleLowerCase())){
          aux.push(o);
        }
      })
      this.platos = aux;
    } else {
      this.platos = this.platosB;
    }
  }

  LimpiarCampos(){
    this.nombre = '';
    this.descripcion = '';
    this.precio = 0;
    this.cantidad = 0;
  }
  ActivarMenu(){
    this.menuOpen = !this.menuOpen;
  }
  ActivarEdit(id: number, index: number, pizza: any){
    this.index = index;
    if (pizza !== undefined){ this.editPizza = pizza; }
    this.editOpen = !this.editOpen;
  }
  ActivarAgregar(){
    this.agregarOpen = !this.agregarOpen;
  }
}
 