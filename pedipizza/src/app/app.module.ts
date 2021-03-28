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
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MenuadminComponent } from './shared/menuadmin/menuadmin.component';
import { PagarComponent } from './pagar/pagar.component';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HomeComponent,
    CartaComponent,
    PedidoComponent,
    AdminComponent,
    InventarioComponent,
    TestsComponent,
    MenuadminComponent,
    PagarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
