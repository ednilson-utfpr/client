import {Component, OnInit} from '@angular/core';
import {FornecedorService} from './fornecedor.service';
import {Fornecedor} from './fornecedor';
import {EstadoService} from '../estado/estado.service';
import {CidadeService} from '../cidade/cidade.service';
import {Estado} from '../estado/estado';
import {Cidade} from '../cidade/cidade';
import {Message} from 'primeng/api';
import {LoginService} from '../login/login.service';
import {ConfirmationService} from 'primeng/api';

@Component({
  templateUrl: './fornecedor.component.html',
  styleUrls: ['./fornecedor.component.css']
})
export class FornecedorComponent implements OnInit {

  fornecedores: Fornecedor[];
  showDialog = false;
  showConfirm = false;
  fornecedorEdit = new Fornecedor();
  cidades: Cidade[];
  estados: Estado[];
  msgs: Message[] = [];

  constructor(private fornecedorService: FornecedorService, 
              private confirmationService: ConfirmationService, 
              private loginService: LoginService, 
              private estadoService: EstadoService, 
              private cidadeService:CidadeService) {
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
    this.fornecedorService.findAll().subscribe(e => this.fornecedores = e);
  }

  novo() {
    this.showDialog = true;
    this.fornecedorEdit = new Fornecedor();
  }

  salvar() {
    this.fornecedorService.save(this.fornecedorEdit).subscribe(e => {
      this.fornecedorEdit = new Fornecedor();
      this.findAll();
      this.showDialog = false;
    });
  }

  editar(fornecedor: Fornecedor) {
    this.fornecedorEdit = fornecedor;
    this.showDialog = true;
  }

  remover(fornecedor: Fornecedor) {
    this.fornecedorService.delete(fornecedor.id).subscribe(() => {
      this.findAll();
	  this.showConfirm = false;
    });
  }
  
  confirmDelete(fornecedor: Fornecedor){
	  this.confirmationService.confirm({
		  message:'Essa ação não poderá ser desfeita',
		  header:'Deseja remover esse registro?',
		  accept:()=>{this.fornecedorService.delete(fornecedor.id).subscribe(()=>{
			  this.findAll();
			  this.msgs = [{severity:'sucess', summary:'Confirmado', detail:'Registro removido com sucesso'}];
		  });
		}
	  });
  }
}
