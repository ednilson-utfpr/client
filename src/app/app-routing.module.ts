import { UsuarioComponent } from './usuario/usuario.component';
import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {LoginService} from './login/login.service';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {ProdutoComponent} from './produto/produto.component';
import {SetorComponent} from './setor/setor.component';
import {CargoComponent} from './cargo/cargo.component';
import {PerfilComponent} from './perfil/perfil.component';
import {CcustoComponent} from './ccusto/ccusto.component';
import {CpontoComponent} from './cponto/cponto.component';
import {AtributoComponent} from './atributo/atributo.component';
import {AtributofComponent} from './atributof/atributof.component';
import {AtividadeComponent} from './atividade/atividade.component';
import {FuncionarioComponent} from './funcionario/funcionario.component';

const routes: Routes = [
  {
    path: '', canActivate: [LoginService], children: [
      {path: '', component: HomeComponent},
      {path: 'produto', component: ProdutoComponent},
      {path: 'setor', component: SetorComponent},
      {path: 'cargo', component: CargoComponent},
      {path: 'funcionario', component: FuncionarioComponent},
      {path: 'perfil', component: PerfilComponent},
      {path: 'usuario', component: UsuarioComponent},
      {path: 'ccusto', component: CcustoComponent},
      {path: 'setor', component: SetorComponent},
      {path: 'cargo', component: CargoComponent},
      {path: 'cponto', component: CpontoComponent},
      {path: 'atributo', component: AtributoComponent},
      {path: 'atributof', component: AtributofComponent},
      {path: 'atividade', component: AtividadeComponent}
    ]
  },
  {path: 'login', component: LoginComponent}
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes);
