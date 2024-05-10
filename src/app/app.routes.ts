import { Routes } from '@angular/router';
import { ContainerComponent } from './components/core/container/container.component';
import { ListaPersonagemComponent } from './components/layout/lista-personagem/lista-personagem.component';
import { LoginComponent } from './components/layout/login/login.component';

export const routes: Routes = [
  {path: '', component: ContainerComponent, children: [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path:'home', component: ListaPersonagemComponent }
  ]},
  {path:'login', component: LoginComponent },


];

