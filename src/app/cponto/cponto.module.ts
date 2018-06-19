import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {CpontoComponent} from './cponto.component';
import {CpontoService} from './cponto.service';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {FormsModule} from '@angular/forms';
import {CalendarModule, CheckboxModule, Dropdown, DropdownModule, InputMaskModule, RadioButtonModule} from 'primeng/primeng';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {GrowlModule} from 'primeng/growl';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    DialogModule,
    DropdownModule,
    CalendarModule,
    InputMaskModule,
    ConfirmDialogModule,
    GrowlModule,

  ],
  declarations: [
    CpontoComponent
  ],
  providers: [
    CpontoService,
    ConfirmationService
  ]
})
export class CpontoModule {

}
