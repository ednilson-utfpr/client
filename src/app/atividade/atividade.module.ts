import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {AtividadeComponent} from './atividade.component';
import {AtividadeService} from './atividade.service';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {FormsModule} from '@angular/forms';
import {
  CalendarModule,
  CheckboxModule, ConfirmationService, ConfirmDialogModule,
  Dropdown,
  DropdownModule,
  InputMaskModule,
  MultiSelectModule,
  RadioButtonModule
} from 'primeng/primeng';
import {AtributofService} from '../atributof/atributof.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    DialogModule,
    DropdownModule,
    InputMaskModule,
    CalendarModule,
    MultiSelectModule,
    ConfirmDialogModule
  ],
  declarations: [
    AtividadeComponent
  ],
  providers: [
    AtividadeService,
    AtributofService,
    ConfirmationService
  ]
})
export class AtividadeModule {

}
