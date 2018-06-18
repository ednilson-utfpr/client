import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {PessoaComponent} from './pessoa.component';
import {PessoaService} from './pessoa.service';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    DialogModule
  ],
  declarations: [
    PessoaComponent
  ],
  providers: [
    PessoaService
  ]
})
export class PessoaModule {

}
