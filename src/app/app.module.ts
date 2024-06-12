import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { TiendaComponent } from './Components/tienda/tienda.component';
import { CarritoComponent } from './Components/carrito/carrito.component';
import { LoginComponent } from './Components/login/login.component';
import { RegistroComponent } from './Components/registro/registro.component';
import { ProductSearchComponent } from './Components/product-search/product-search.component';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { FormsModule, NgForm } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TiendaComponent,
    CarritoComponent,
    LoginComponent,
    RegistroComponent,
    ProductSearchComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
