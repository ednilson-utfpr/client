import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HttpClientInterceptor} from './http-client.interceptor';
import {LoginService} from './login/login.service';
import {AppRouting} from './app-routing.module';
import {LoginModule} from './login/login.module';
import {HomeModule} from './home/home.module';
import {ProdutoModule} from './produto/produto.module';
<<<<<<< HEAD
import { SetorModule } from './setor/setor.module';
import { CargoModule } from './cargo/cargo.module';

=======
import {PerfilModule} from './perfil/perfil.module';
>>>>>>> e0aa5fd441e2f653cab97f1afb2ff81a17998f8e

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
<<<<<<< HEAD
    ProdutoModule, 
    SetorModule,
    CargoModule   
=======
    ProdutoModule,
    PerfilModule
>>>>>>> e0aa5fd441e2f653cab97f1afb2ff81a17998f8e
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
