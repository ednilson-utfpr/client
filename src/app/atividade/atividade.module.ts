import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {AtividadeComponent} from './atividade.component';
import {AtividadeService} from './atividade.service';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {FormsModule} from '@angular/forms';
import {CheckboxModule, Dropdown, DropdownModule, InputMaskModule, RadioButtonModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    DialogModule,
    DropdownModule,
    InputMaskModule,
  ],
  declarations: [
    AtividadeComponent
  ],
  providers: [
    AtividadeService
  ]
})
export class AtividadeModule {

}
