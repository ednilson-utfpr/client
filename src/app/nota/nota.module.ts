import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {NotaComponent} from './nota.component';
import {NotaService} from './nota.service';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {FormsModule} from '@angular/forms';
import {DropdownModule, Dropdown} from 'primeng/dropdown';
import {TabViewModule} from 'primeng/tabview';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    DialogModule,
    DropdownModule,
    TabViewModule
  ],
  declarations: [
    NotaComponent
  ],
  providers: [
    NotaService
  ]
})
export class NotaModule {

}
