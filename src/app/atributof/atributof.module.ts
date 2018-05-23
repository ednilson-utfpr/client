import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {AtributofComponent} from './atributof.component';
import {AtributofService} from './atributof.service';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {FormsModule} from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    DialogModule,
    CalendarModule,
    DropdownModule
  ],
  declarations: [
    AtributofComponent
  ],
  providers: [
    AtributofService
  ]
})
export class AtributofModule {

}
