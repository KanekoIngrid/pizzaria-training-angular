import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { BuildPizzaComponent } from './pages/build-pizza/build-pizza.component';
import { ButtonComponent } from './components/button/button.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { NotfoundPageComponent } from './pages/notfound-page/notfound-page.component';
import { CarrinhoGlobalComponent } from './components/carrinho-global/carrinho-global.component';
import { BuildPizzaAddComponent } from './components/build-pizza-add/build-pizza-add.component';


@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    BuildPizzaComponent,
    ButtonComponent,
    CarrinhoComponent,
    NotfoundPageComponent,
    CarrinhoGlobalComponent,
    BuildPizzaAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
