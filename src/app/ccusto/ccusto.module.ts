import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {CcustoComponent} from './ccusto.component';
import {CcustoService} from './ccusto.service';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {FormsModule} from '@angular/forms';
import {InputMaskModule, RadioButtonModule} from 'primeng/primeng';
import {ConfirmationService, ConfirmDialogModule} from 'primeng/primeng';
import {GrowlModule} from 'primeng/growl';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    DialogModule,
    InputMaskModule,
    ConfirmDialogModule,
    GrowlModule

  ],
  declarations: [
    CcustoComponent
  ],
  providers: [
    CcustoService,
    ConfirmationService
  ]
})
export class CcustoModule {

}
