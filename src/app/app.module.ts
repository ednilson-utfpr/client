import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AmChartsModule} from "@amcharts/amcharts3-angular";
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HttpClientInterceptor} from './http-client.interceptor';
import {LoginService} from './login/login.service';
import {AppRouting} from './app-routing.module';
import {LoginModule} from './login/login.module';
import {HomeModule} from './home/home.module';
import {ProdutoModule} from './produto/produto.module';
import {PessoaModule} from './pessoa/pessoa.module';
import {FornecedorModule} from './fornecedor/fornecedor.module';
import {DropdownModule} from 'primeng/dropdown';
import {ClienteModule} from './cliente/cliente.module';
import {CentroCustoModule} from './CentroCusto/centroCusto.module';
import {ObraModule} from './Obra/obra.module';
import {CidadeModule} from './Cidade/cidade.module';



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
    PessoaModule,
    DropdownModule,
    FornecedorModule,
    ClienteModule,
    CentroCustoModule,
    ObraModule,
    AmChartsModule,
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
