import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ItemNotaComponent} from './itemNota.component';
import {ItemNotaService} from './itemNota.service';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {FormsModule} from '@angular/forms';
import {DropdownModule, Dropdown} from 'primeng/dropdown';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    DialogModule,
    DropdownModule
  ],
  declarations: [
    ItemNotaComponent
  ],
  providers: [
    ItemNotaService
  ]
})
export class ItemNotaModule {

}
