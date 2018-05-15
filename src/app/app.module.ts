import { UsuarioModule } from './usuario/usuario.module';
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
import {PerfilModule} from './perfil/perfil.module';

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
    PerfilModule,
    UsuarioModule
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
