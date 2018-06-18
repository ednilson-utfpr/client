import { ConfirmationService } from 'primeng/api';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {AtributoComponent} from './atributo.component';
import {AtributoService} from './atributo.service';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {FormsModule} from '@angular/forms';
import {GrowlModule} from 'primeng/growl';
import {ConfirmDialogModule} from 'primeng/confirmdialog';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    DialogModule,
    GrowlModule,
    ConfirmDialogModule
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
