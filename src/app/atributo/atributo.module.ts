import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {AtributoComponent} from './atributo.component';
import {AtributoService} from './atributo.service';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {FormsModule} from '@angular/forms';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {GrowlModule} from 'primeng/growl'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    DialogModule,
    ConfirmDialogModule,
    GrowlModule
  ],
  declarations: [
    AtributoComponent
  ],
  providers: [
    AtributoService,
    ConfirmationService
  ]
})
export class AtributoModule {

}
