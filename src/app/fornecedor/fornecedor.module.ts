import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FornecedorComponent} from './fornecedor.component';
import {FornecedorService} from './fornecedor.service';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {FormsModule} from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import {PessoaService} from '../pessoa/pessoa.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    DialogModule,
    DropdownModule
  ],
  declarations: [
    FornecedorComponent
  ],
  providers: [
    FornecedorService,
    PessoaService
  ]
})
export class FornecedorModule {

}
