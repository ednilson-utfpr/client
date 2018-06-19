import {Component, OnInit} from '@angular/core';
import {ClienteService} from './cliente.service';
import {Cliente} from './cliente';
import {EstadoService} from '../estado/estado.service';
import {CidadeService} from '../cidade/cidade.service';
import {Estado} from '../estado/estado';
import {Cidade} from '../cidade/cidade';
import {LoginService} from '../login/login.service';
import {Message} from 'primeng/api';
import {ConfirmationService} from 'primeng/api';

@Component({
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  clientes: Cliente[];
  showDialog = false;
  showConfirm = false;
  clienteEdit = new Cliente();
  cidades: Cidade[];
  estados: Estado[];
  msgs: Message[] = [];

  constructor(private clienteService: ClienteService, private confirmationService: ConfirmationService, private estadoService: EstadoService, private cidadeService:CidadeService, private loginService: LoginService) {
  }

  ngOnInit(): void {
    this.findAll();
    this.estadoService.findAll().subscribe(e => this.estados = e);
  }
  
  hasRole(role: string): boolean {
    return this.loginService.hasRole(role);
  }
  
  mostrarConfirm(condicao: boolean) {
	this.showConfirm = condicao;
  }
  
  buscaCidades(estado): void{
  	this.cidadeService.findByEstado(estado).subscribe(c => this.cidades = c);
  }

  findAll() {
    this.clienteService.findAll().subscribe(e => this.clientes = e);
  }

  novo() {
    this.showDialog = true;
    this.clienteEdit = new Cliente();
  }

  salvar() {
    this.clienteService.save(this.clienteEdit).subscribe(e => {
      this.clienteEdit = new Cliente();
      this.findAll();
      this.showDialog = false;
    });
  }

  editar(cliente: Cliente) {
    this.clienteEdit = cliente;
    this.showDialog = true;
  }

  remover(cliente: Cliente) {
    this.clienteService.delete(cliente.id).subscribe(() => {
      this.findAll();
	  this.showConfirm = false;
    });
  }
  
  confirmDelete(cliente: Cliente){
	  this.confirmationService.confirm({
		  message:'Essa ação não poderá ser desfeita',
		  header:'Deseja remover esse registro?',
		  accept:()=>{this.clienteService.delete(cliente.id).subscribe(()=>{
			  this.findAll();
			  this.msgs = [{severity:'sucess', summary:'Confirmado', detail:'Registro removido com sucesso'}];
		  });
		}
	  });
  }
}
