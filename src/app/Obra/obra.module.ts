import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {FormsModule} from '@angular/forms';
import {ObraService} from './obra.service';
import {ObraComponent} from './obra.component';
import {DropdownModule} from 'primeng/dropdown';
import {CalendarModule, InputMaskModule} from 'primeng/primeng';
import {ClienteService} from '../cliente/cliente.service';
import {CentroCustoService} from '../CentroCusto/centroCusto.service';
import {FornecedorService} from '../fornecedor/fornecedor.service';
import { AmChartsModule } from '@amcharts/amcharts3-angular';
import {CidadeService} from '../Cidade/cidade.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    DialogModule,
    DropdownModule,
    CalendarModule,
    InputMaskModule,
    AmChartsModule
  ],
  declarations: [
    ObraComponent
  ],
  providers: [
    ObraService,
    ClienteService,
    CentroCustoService,
    FornecedorService,
    CidadeService
  ]
})
export class ObraModule {

}
