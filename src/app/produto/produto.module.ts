import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ProdutoComponent} from './produto.component';
import {ProdutoService} from './produto.service';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {FormsModule} from '@angular/forms';
import {SpinnerModule} from 'primeng/spinner';
import {MessageModule} from 'primeng/message';
import {DropdownModule} from 'primeng/primeng';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {GrowlModule} from 'primeng/growl';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    DialogModule,
    SpinnerModule,
    MessageModule,
    DropdownModule,
    ConfirmDialogModule,
    GrowlModule
  ],
  declarations: [
    ProdutoComponent
  ],
  providers: [
    ProdutoService,
    ConfirmationService
  ]
})
export class ProdutoModule {

}
