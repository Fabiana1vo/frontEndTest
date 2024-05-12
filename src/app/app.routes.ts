import { Routes } from '@angular/router';
import { ContainerComponent } from './components/core/container/container.component';
import { ListaPersonagemComponent } from './components/layout/lista-personagem/lista-personagem.component';
import { LoginComponent } from './components/layout/login/login.component';
import { ListarEpisodiosComponent } from './components/layout/listar-episodios/listar-episodios.component';

export const routes: Routes = [
  {path: '', component: ContainerComponent, children: [
    {path: '', redirectTo: '/personagens', pathMatch: 'full'},
    {path:'personagens', component: ListaPersonagemComponent },
    {path:'episodios', component:  ListarEpisodiosComponent }
  ]},
  {path:'login', component: LoginComponent },


];

