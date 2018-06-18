import { ConfirmationService } from 'primeng/api';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {AtributofComponent} from './atributof.component';
import {AtributofService} from './atributof.service';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {FormsModule} from '@angular/forms';
import {CalendarModule, DropdownModule} from 'primeng/primeng';
import {ConfirmDialogModule} from 'primeng/confirmdialog';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    DialogModule,
    DropdownModule,
    CalendarModule,
    ConfirmDialogModule
  ],
  declarations: [
    AtributofComponent
  ],
  providers: [
    AtributofService,
    ConfirmationService
  ]
})
export class AtributofModule {

}
