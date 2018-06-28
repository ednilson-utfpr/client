import {Component, OnInit} from '@angular/core';
import {EstadoService} from './estado.service';
import {Estado} from './estado';
import {LoginService} from '../login/login.service';
import {Message} from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';

@Component({
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.css']
})
export class EstadoComponent implements OnInit {

  estados: Estado[];
  showDialog = false;
  showConfirm = false;
  estadoEdit = new Estado();
  msgs: Message[] = [];

  constructor(private estadoService: EstadoService,
     private confirmationService: ConfirmationService, 
     private loginService: LoginService) {
  }

  ngOnInit(): void {
    this.findAll();
  }
  
  hasRole(role: string): boolean {
    return this.loginService.hasRole(role);
  }

  findAll() {
    this.estadoService.findAll().subscribe(e => this.estados = e);
  }

  novo() {
    this.showDialog = true;
    this.estadoEdit = new Estado();
  }

  salvar() {
    this.estadoService.save(this.estadoEdit).subscribe(e => {
      this.estadoEdit = new Estado();
      this.findAll();
      this.showDialog = false;
	  this.msgs = [{severity:'sucess', summary:'Confirmado', detail:'Registro salvo com sucesso'}];
	},
    error => {
      this.msgs = [{severity:'error', summary:'Erro', detail:'Certifique-se de preencher todos os campos.'}];
    });
  }

  editar(estado: Estado) {
    this.estadoEdit = estado;
    this.showDialog = true;
	this.msgs = [{severity:'sucess', summary:'Confirmado', detail:'Registro alterado com sucesso'}];
  }

  remover(estado: Estado) {
    this.estadoService.delete(estado.id).subscribe(() => {
      this.findAll();
	  this.showConfirm = false;
    });
  }
  
  confirmDelete(estado: Estado){
	  this.confirmationService.confirm({
		  message:'Essa ação não poderá ser desfeita',
		  header:'Deseja remover esse registro?',
		  accept:()=>{this.estadoService.delete(estado.id).subscribe(()=>{
			  this.findAll();
			  this.msgs = [{severity:'sucess', summary:'Confirmado', detail:'Registro removido com sucesso'}];
		  });
		}
	  });
  }
}
