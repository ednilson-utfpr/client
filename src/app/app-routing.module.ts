import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {LoginService} from './login/login.service';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {ProdutoComponent} from './produto/produto.component';
<<<<<<< HEAD
import { SetorComponent } from './setor/setor.component';
import { CargoComponent } from './cargo/cargo.component';
=======
import {PerfilComponent} from './perfil/perfil.component';
>>>>>>> e0aa5fd441e2f653cab97f1afb2ff81a17998f8e

const routes: Routes = [
  {
    path: '', canActivate: [LoginService], children: [
      {path: '', component: HomeComponent},
      {path: 'produto', component: ProdutoComponent},
<<<<<<< HEAD
      {path: 'setor', component: SetorComponent},
      {path: 'cargo', component: CargoComponent}
    
=======
      {path: 'perfil', component: PerfilComponent}
>>>>>>> e0aa5fd441e2f653cab97f1afb2ff81a17998f8e
    ]
  },
  {path: 'login', component: LoginComponent}
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes);
