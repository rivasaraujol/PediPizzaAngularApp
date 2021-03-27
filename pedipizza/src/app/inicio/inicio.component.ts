import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor( protected uS: UsuarioService, protected rt: Router) {
    this.usuarioService = uS;
    this.router = rt;
   }

  ngOnInit(): void {
  }

  Loguear(){
    this.usuarioService.Login(this.user, this.pass).subscribe((o: any) => {
      this.router.navigate(["/inventario"]);
    });
    this.ErrorVista();
  }

  ErrorVista(){
    this.errorvista = !this.errorvista;
  }
}
