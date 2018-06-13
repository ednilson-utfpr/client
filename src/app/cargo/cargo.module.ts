import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {CargoComponent} from './cargo.component';
import {CargoService} from './cargo.service';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    DialogModule,
  ],
  declarations: [
    CargoComponent
  ],
  providers: [
    CargoService
  ]
})
export class CargoModule {

}
