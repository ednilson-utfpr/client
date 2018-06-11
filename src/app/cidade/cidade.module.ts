import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {CidadeComponent} from './cidade.component';
import {CidadeService} from './cidade.service';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {FormsModule} from '@angular/forms';
import {DropdownModule} from 'primeng/primeng';
import {EstadoService} from '../estado/estado.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    DialogModule,
    DropdownModule
  ],
  declarations: [
    CidadeComponent
  ],
  providers: [
    CidadeService,
    EstadoService
  ]
})
export class CidadeModule {

}
