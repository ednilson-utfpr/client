import {UsuarioModule} from './usuario/usuario.module';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AmChartsModule} from '@amcharts/amcharts3-angular';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HttpClientInterceptor} from './http-client.interceptor';
import {LoginService} from './login/login.service';
import {AppRouting} from './app-routing.module';
import {LoginModule} from './login/login.module';
import {HomeModule} from './home/home.module';
import {ProdutoModule} from './produto/produto.module';
import {NotaModule} from './nota/nota.module';
import {ItemNotaModule} from './itemNota/itemNota.module';
import {BancohorasModule} from './bancohoras/bancohoras.module';
import {AtividadeModule} from './atividade/atividade.module';
import {AtributofModule} from './atributof/atributof.module';
import {AtributoModule} from './atributo/atributo.module';
import {PerfilModule} from './perfil/perfil.module';
import {FuncionarioModule} from './funcionario/funcionario.module';
import {CargoModule} from './cargo/cargo.module';
import {SetorModule} from './setor/setor.module';
import {CpontoModule} from './cponto/cponto.module';
import {CcustoModule} from './ccusto/ccusto.module';
import {PessoaModule} from './pessoa/pessoa.module';
import {FornecedorModule} from './fornecedor/fornecedor.module';
import {DropdownModule} from 'primeng/dropdown';
import {ClienteModule} from './cliente/cliente.module';
import {ObraModule} from './obra/obra.module';
import {CidadeModule} from './cidade/cidade.module';
import {EstadoModule} from './estado/estado.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouting,
    HttpClientModule,
    LoginModule,
    HomeModule,
    ProdutoModule,
    NotaModule,
    ItemNotaModule,
    PerfilModule,
    UsuarioModule,
    CcustoModule,
    CpontoModule,
    SetorModule,
    CargoModule,
    FuncionarioModule,
    AtributoModule,
    AtributofModule,
    AtividadeModule,
    BancohorasModule,
    ProdutoModule,
    PessoaModule,
    DropdownModule,
    FornecedorModule,
    ClienteModule,
    ObraModule,
    AmChartsModule,
    CidadeModule,
    FornecedorModule,
	  ClienteModule,
	  EstadoModule,
    CidadeModule

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpClientInterceptor,
      multi: true
    },
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}


