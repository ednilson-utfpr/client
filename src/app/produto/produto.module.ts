import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ProdutoComponent} from './produto.component';
import {ProdutoService} from './produto.service';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {FormsModule} from '@angular/forms';
import {SpinnerModule} from 'primeng/spinner';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    DialogModule,
    SpinnerModule,
    MessageModule,
    MessagesModule
  ],
  declarations: [
    ProdutoComponent
  ],
  providers: [
    ProdutoService
  ]
})
export class ProdutoModule {

}
