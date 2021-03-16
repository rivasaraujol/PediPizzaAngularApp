import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { HomeComponent } from './home/home.component';
import { CartaComponent } from './carta/carta.component';
import { PedidoComponent } from './pedido/pedido.component';
import { AdminComponent } from './admin/admin.component';
import { InventarioComponent } from './inventario/inventario.component';
import { TestsComponent } from './tests/tests.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HomeComponent,
    CartaComponent,
    PedidoComponent,
    AdminComponent,
    InventarioComponent,
    TestsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
