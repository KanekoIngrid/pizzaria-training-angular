import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { BuildPizzaComponent } from './pages/build-pizza/build-pizza.component';
// import { CarrinhoGlobalComponent } from './components/carrinho-global/';
import { NotfoundPageComponent } from './pages/notfound-page/notfound-page.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent
  },
  {
    path: 'menu', 
    component: MenuComponent
  },
  {
    path: 'build-pizza', 
    component: BuildPizzaComponent
  },
  {
    path:'**',
    component: NotfoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
