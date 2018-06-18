import {Component, OnInit} from '@angular/core';
import {AtributoService} from './atributo.service';
import {Atributo} from './atributo';
import {Message} from 'primeng/api';
import {LoginService} from '../login/login.service';

@Component({
  templateUrl: './atributo.component.html',
  styleUrls: ['./atributo.component.css']
})
export class AtributoComponent implements OnInit {

  atributos: Atributo[];
  showDialog = false;
  showConfirm = false;
  atributoEdit = new Atributo();
  msgs: Message[] = [];

  constructor(private atributoService: AtributoService, private loginService: LoginService) {
  }

  hasRole(role: string): boolean {
    return this.loginService.hasRole(role);
  }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.atributoService.findAll().subscribe(e => this.atributos = e);
  }

  novo() {
    this.showDialog = true;
    this.atributoEdit = new Atributo();
  }

  salvar() {
    this.atributoService.save(this.atributoEdit).subscribe(e => {
      this.atributoEdit = new Atributo();
      this.findAll();
      this.showDialog = false;
      this.msgs = [{severity:'sucess', summary:'Confirmado', detail:'Registro salvo com sucesso'}];      
    },
    error => {
      this.msgs = [{severity:'error', summary:'Erro', detail:'Certifique-se de preencher todos os campos.'}];
    });
  }

  editar(atributo: Atributo) {
    this.atributoEdit = atributo;
    this.showDialog = true;
    this.msgs = [{severity:'sucess', summary:'Confirmado', detail:'Registro alterado com sucesso'}];
  }

  remover(atributo: Atributo) {
    this.atributoService.delete(atributo.id).subscribe(() => {
      this.findAll();
      this.showConfirm = false;
    });
  }

  mostrarConfirm(condicao: boolean) {
    this.showConfirm = condicao;
  }
}
