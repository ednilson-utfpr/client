import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {EstadoComponent} from './estado.component';
import {EstadoService} from './estado.service';
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
    EstadoComponent
  ],
  providers: [
    EstadoService
  ]
})
export class EstadoModule {

}
