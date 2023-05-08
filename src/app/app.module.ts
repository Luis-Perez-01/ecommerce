import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './views/home/home.component';
import { OfertasComponent } from './components/ofertas/ofertas.component';
import { ProductosComponent } from './components/productos/productos.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { InfoProductoComponent } from './views/info-producto/info-producto.component';
import { PerfilComponent } from './views/perfil/perfil.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    OfertasComponent,
    ProductosComponent,
    CarouselComponent,
    InfoProductoComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
