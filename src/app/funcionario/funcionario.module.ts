import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FuncionarioComponent} from './funcionario.component';
import {FuncionarioService} from './funcionario.service';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {FormsModule} from '@angular/forms';
import {DropdownModule, Dropdown} from 'primeng/dropdown';
import {CheckboxModule} from 'primeng/checkbox';
import {CalendarModule} from 'primeng/calendar';
import {EstadoService} from '../estado/estado.service';
import {CidadeService} from '../cidade/cidade.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    DialogModule,
    DropdownModule,
    CheckboxModule,
    CalendarModule,
  ],
  declarations: [
    FuncionarioComponent
  ],
  providers: [
    FuncionarioService,
    CidadeService,
    EstadoService
  ]
})
export class FuncionarioModule {

}
