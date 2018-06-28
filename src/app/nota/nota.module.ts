import { ClienteService } from './../cliente/cliente.service';
import { PessoaService } from './../pessoa/pessoa.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NotaComponent } from './nota.component';
import { NotaService } from './nota.service';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { DropdownModule, Dropdown } from 'primeng/dropdown';
import { TabViewModule } from 'primeng/tabview';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService} from 'primeng/api';
import { GrowlModule } from 'primeng/growl';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    DialogModule,
    DropdownModule,
    TabViewModule,
    DialogModule,
    ConfirmDialogModule,
    GrowlModule  

  ],
  declarations: [
    NotaComponent
  ],
  providers: [
    NotaService,
    PessoaService,
    ClienteService,
    ConfirmationService
  ]
})
export class NotaModule {
}
