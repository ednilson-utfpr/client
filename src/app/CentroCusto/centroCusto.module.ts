import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {FormsModule} from '@angular/forms';
import {CentroCustoComponent} from './centroCusto.component';
import {CentroCustoService} from './centroCusto.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    DialogModule
  ],
  declarations: [
    CentroCustoComponent
  ],
  providers: [
    CentroCustoService
  ]
})
export class CentroCustoModule {

}
