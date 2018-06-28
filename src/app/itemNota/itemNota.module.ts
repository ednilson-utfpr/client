import { ConfirmationService } from 'primeng/primeng';
import { GrowlModule } from 'primeng/growl';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ItemNotaComponent } from './itemNota.component';
import { ItemNotaService } from './itemNota.service';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { DropdownModule, Dropdown } from 'primeng/dropdown';
import { ConfirmDialogModule } from 'primeng/confirmdialog';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    DialogModule,
    DropdownModule,
    GrowlModule,
    ConfirmDialogModule
  ],
  declarations: [
    ItemNotaComponent
  ],
  providers: [
    ItemNotaService,
    ConfirmationService
  ]
})
export class ItemNotaModule {

}
