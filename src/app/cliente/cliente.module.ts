import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ClienteComponent} from './cliente.component';
import {ClienteService} from './cliente.service';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {FormsModule} from '@angular/forms';
import {EstadoService} from '../estado/estado.service';
import {CidadeService} from '../cidade/cidade.service';
import {DropdownModule, CheckboxModule} from 'primeng/primeng';
import {LoginService} from '../login/login.service';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    DialogModule,
    DropdownModule,
    CheckboxModule,
	ConfirmDialogModule
  ],
  declarations: [
    ClienteComponent
  ],
  providers: [
    ClienteService,
    CidadeService,
    EstadoService,
	LoginService,
	ConfirmationService
  ]
})
export class ClienteModule {

}
