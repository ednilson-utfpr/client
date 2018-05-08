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

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    DialogModule,
    DropdownModule,
    CheckboxModule,
    CalendarModule
  ],
  declarations: [
    FuncionarioComponent
  ],
  providers: [
    FuncionarioService
  ]
})
export class FuncionarioModule {

}
