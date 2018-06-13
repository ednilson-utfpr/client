import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BancohorasComponent } from './bancohoras.component';
import {BancohorasService} from './bancohoras.service';
import {CalendarModule, DropdownModule, InputMaskModule} from 'primeng/primeng';
import {FormsModule} from '@angular/forms';
import {DialogModule} from 'primeng/dialog';
import {TableModule} from 'primeng/table';
import {DatePipe} from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    DialogModule,
    DropdownModule,
    CalendarModule,
    InputMaskModule
  ],
  declarations: [
    BancohorasComponent
  ],
  providers: [
    BancohorasService,
    DatePipe
  ]
})
export class BancohorasModule { }
