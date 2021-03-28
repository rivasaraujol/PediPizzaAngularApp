import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChequeoService } from '../shared/chequeo.service';
import { UsuarioService } from '../shared/usuario.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  private usuarioService: UsuarioService;
  private router: Router;
  user = '';
  pass = '';
  public errorvista = false;

  constructor( protected uS: UsuarioService, protected rt: Router , protected chequeo: ChequeoService) {
    this.usuarioService = uS;
    this.router = rt;
    if (this.chequeo.LeerGalleta()){
      this.router.navigate(["/inventario"]);
    }
   }

  ngOnInit(): void {
  }

  Loguear(){
    this.usuarioService.Login(this.user, this.pass).subscribe((o: any) => {
      this.chequeo.SetGalleta();
      this.router.navigate(["/inventario"]);
    });
    this.ErrorVista();
  }

  ErrorVista(){
    this.errorvista = !this.errorvista;
  }
}
