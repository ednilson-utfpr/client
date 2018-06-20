import {UsuarioComponent} from './usuario/usuario.component';
import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {LoginService} from './login/login.service';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {ProdutoComponent} from './produto/produto.component';
import {ItemNotaComponent} from "./itemNota/itemNota.component";
import {NotaComponent} from "./nota/nota.component";
import {SetorComponent} from "./setor/setor.component";
import {CargoComponent} from "./cargo/cargo.component";
import {FuncionarioComponent} from "./funcionario/funcionario.component";
import {PerfilComponent} from "./perfil/perfil.component";
import {CcustoComponent} from "./ccusto/ccusto.component";
import {CpontoComponent} from "./cponto/cponto.component";
import {AtributoComponent} from "./atributo/atributo.component";
import {AtributofComponent} from "./atributof/atributof.component";
import {AtividadeComponent} from "./atividade/atividade.component";
import {BancohorasComponent} from "./bancohoras/bancohoras.component";
import {FornecedorComponent} from './fornecedor/fornecedor.component';
import {ClienteComponent} from './cliente/cliente.component';
import {EstadoComponent} from './estado/estado.component';
import {CidadeComponent} from './cidade/cidade.component';
import {ObraComponent} from './obra/obra.component';
import {PessoaComponent} from "./pessoa/pessoa.component";

const routes: Routes = [
  {
    path: '', canActivate: [LoginService], children: [
      {path: '', component: HomeComponent},
      {path: 'produto', component: ProdutoComponent},
      {path: 'nota', component: NotaComponent},
      {path: 'itemNota', component: ItemNotaComponent},
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
      {path: 'atividade', component: AtividadeComponent},
      {path: 'bancohoras', component: BancohorasComponent},
      {path: 'produto', component: ProdutoComponent},
      {path: 'pessoa', component: PessoaComponent},
      {path: 'fornecedor', component: FornecedorComponent},
      {path: 'obra', component: ObraComponent},
	    {path: 'fornecedor', component: FornecedorComponent},
	    {path: 'cliente', component: ClienteComponent},
      {path: 'estado', component: EstadoComponent},
      {path: 'cidade', component: CidadeComponent}
      
    ]
  },
  {path: 'login', component: LoginComponent}
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes);
