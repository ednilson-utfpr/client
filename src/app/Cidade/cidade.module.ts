import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {CidadeComponent} from './cidade.component';
import {CidadeService} from './cidade.service';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    DialogModule
  ],
  declarations: [
    CidadeComponent
  ],
  providers: [
    CidadeService
  ]
})
export class CidadeModule {

}
