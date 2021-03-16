import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from "./inicio/inicio.component";
import {HomeComponent} from "./home/home.component";
import {AdminComponent} from "./admin/admin.component";
import {CartaComponent} from "./carta/carta.component";
import {InventarioComponent} from "./inventario/inventario.component";
import {PedidoComponent} from "./pedido/pedido.component";
import {TestsComponent} from "./tests/tests.component";

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'home', component: HomeComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'carta', component: CartaComponent},
  {path: 'inventario', component: InventarioComponent},
  {path: 'pedido', component: PedidoComponent},
  {path: 'tests', component: TestsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }