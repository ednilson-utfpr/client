import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {SetorComponent} from './setor.component';
import {SetorService} from './setor.service';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    DialogModule,
  ],
  declarations: [
    SetorComponent
  ],
  providers: [
    SetorService
  ]
})
export class SetorModule {

}
