import {Component, OnInit} from '@angular/core';
import {CidadeService} from './cidade.service';
import {Cidade} from './cidade';
import {Estado} from '../estado/estado';
import {EstadoService} from '../estado/estado.service';
import {LoginService} from '../login/login.service';
import {Message} from 'primeng/api';
import {ConfirmationService} from 'primeng/api';

@Component({
  templateUrl: './cidade.component.html',
  styleUrls: ['./cidade.component.css']
})
export class CidadeComponent implements OnInit {

  cidades: Cidade[];
  showDialog = false;
  showConfirm = false;
  cidadeEdit = new Cidade();
  estados: Estado[];
  msgs: Message[] = [];

  constructor(private cidadeService: CidadeService, private confirmationService: ConfirmationService, private estadoService: EstadoService, private loginService: LoginService) {
  	
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

  findAll() {
    this.cidadeService.findAll().subscribe(e => this.cidades = e);
  }

  novo() {
    this.showDialog = true;
    this.cidadeEdit = new Cidade();
  }

  salvar() {
    this.cidadeService.save(this.cidadeEdit).subscribe(e => {
      this.cidadeEdit = new Cidade();
      this.findAll();
      this.showDialog = false;
    });
  }

  editar(cidade: Cidade) {
    this.cidadeEdit = cidade;
    this.showDialog = true;
  }

  remover(cidade: Cidade) {
    this.cidadeService.delete(cidade.id).subscribe(() => {
      this.findAll();
	  this.showConfirm = false;
    });
  }
  
  confirmDelete(cidade: Cidade){
	  this.confirmationService.confirm({
		  message:'Essa ação não poderá ser desfeita',
		  header:'Deseja remover esse registro?',
		  accept:()=>{this.cidadeService.delete(cidade.id).subscribe(()=>{
			  this.findAll();
			  this.msgs = [{severity:'sucess', summary:'Confirmado', detail:'Registro removido com sucesso'}];
		  });
		}
	  });
  }
}
