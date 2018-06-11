import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FornecedorComponent} from './fornecedor.component';
import {FornecedorService} from './fornecedor.service';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {FormsModule} from '@angular/forms';
import {EstadoService} from '../estado/estado.service';
import {CidadeService} from '../cidade/cidade.service';
import {DropdownModule, CheckboxModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    DialogModule,
    DropdownModule,
    CheckboxModule
  ],
  declarations: [
    FornecedorComponent
  ],
  providers: [
    FornecedorService,
    CidadeService,
    EstadoService
  ]
})
export class FornecedorModule {

}
