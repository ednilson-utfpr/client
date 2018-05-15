import { UsuarioComponent } from './usuario/usuario.component';
import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {LoginService} from './login/login.service';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {ProdutoComponent} from './produto/produto.component';
import {PerfilComponent} from './perfil/perfil.component';

const routes: Routes = [
  {
    path: '', canActivate: [LoginService], children: [
      {path: '', component: HomeComponent},
      {path: 'produto', component: ProdutoComponent},
      {path: 'perfil', component: PerfilComponent},
      {path: 'usuario', component: UsuarioComponent}
    ]
  },
  {path: 'login', component: LoginComponent}
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes);
