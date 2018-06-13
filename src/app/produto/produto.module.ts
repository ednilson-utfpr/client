import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ProdutoComponent} from './produto.component';
import {ProdutoService} from './produto.service';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {FormsModule} from '@angular/forms';
<<<<<<< HEAD
import {SpinnerModule} from 'primeng/spinner';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
=======
import {CheckboxModule, Dropdown, DropdownModule, RadioButtonModule} from 'primeng/primeng';
>>>>>>> 976cccce9c8c9d79575e442bb58cd53e1469ccd2

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    DialogModule,
<<<<<<< HEAD
    SpinnerModule,
    MessageModule,
    MessagesModule
=======
    DropdownModule,
>>>>>>> 976cccce9c8c9d79575e442bb58cd53e1469ccd2
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
