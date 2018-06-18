import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ClienteComponent} from './cliente.component';
import {ClienteService} from './cliente.service';
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
    ClienteComponent
  ],
  providers: [
    ClienteService,
    PessoaService
  ]
})
export class ClienteModule {

}
