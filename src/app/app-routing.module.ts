import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {LoginService} from './login/login.service';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {ProdutoComponent} from './produto/produto.component';
import {PessoaComponent} from './pessoa/pessoa.component';
import {FornecedorComponent} from './fornecedor/fornecedor.component';
import {ClienteComponent} from './cliente/cliente.component';
import {CentroCustoComponent} from './CentroCusto/centroCusto.component';
import {ObraComponent} from './Obra/obra.component';
import {CidadeComponent} from './Cidade/cidade.component';

const routes: Routes = [
  {
    path: '', canActivate: [LoginService], children: [
      {path: '', component: HomeComponent},
      {path: 'produto', component: ProdutoComponent},
      {path: 'pessoa', component: PessoaComponent},
      {path: 'fornecedor', component: FornecedorComponent},
      {path: 'cliente', component: ClienteComponent},
      {path: 'centroCusto', component: CentroCustoComponent},
      {path: 'obra', component: ObraComponent},
      {path: 'cidade', component: CidadeComponent}
    ]
  },
  {path: 'login', component: LoginComponent}
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes);
