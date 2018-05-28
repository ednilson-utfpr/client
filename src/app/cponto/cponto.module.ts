import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {CpontoComponent} from './cponto.component';
import {CpontoService} from './cponto.service';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {FormsModule} from '@angular/forms';
import {CalendarModule, CheckboxModule, Dropdown, DropdownModule, InputMaskModule, RadioButtonModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    DialogModule,
    DropdownModule,
    CalendarModule,
    InputMaskModule,
  ],
  declarations: [
    CpontoComponent
  ],
  providers: [
    CpontoService
  ]
})
export class CpontoModule {

}
