import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {EstadoComponent} from './estado.component';
import {EstadoService} from './estado.service';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {FormsModule} from '@angular/forms';
import {LoginService} from '../login/login.service';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    DialogModule,
	ConfirmDialogModule,
  ],
  declarations: [
    EstadoComponent
  ],
  providers: [
    EstadoService,
	ConfirmationService,
	LoginService
  ]
})
export class EstadoModule {

}
