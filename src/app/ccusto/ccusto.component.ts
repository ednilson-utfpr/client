import { LoginService } from './../login/login.service';
import {Component, OnInit} from '@angular/core';
import {CcustoService} from './ccusto.service';
import {Ccusto} from './ccusto';
import {ConfirmationService, Message} from 'primeng/api';
import {Cponto} from '../cponto/cponto';

@Component({
  templateUrl: './ccusto.component.html',
  styleUrls: ['./ccusto.component.css']
})
export class CcustoComponent implements OnInit {

  ccustos: Ccusto[];
  showDialog = false;
  ccustoEdit = new Ccusto();
  showConfirm = false;
  msgs: Message[] = [];

  constructor(private ccustoService: CcustoService, private loginService: LoginService
              , private confirmationService: ConfirmationService) {
  }

  hasRole(role: string): boolean {
    return this.loginService.hasRole(role);
  }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.ccustoService.findAll().subscribe(e => this.ccustos = e);
  }

  novo() {
    this.showDialog = true;
    this.ccustoEdit = new Ccusto();
  }

  salvar() {
    this.ccustoService.save(this.ccustoEdit).subscribe(e => {
      this.ccustoEdit = new Ccusto();
      this.findAll();
      this.showDialog = false;
        this.msgs = [{severity:'sucess', summary:'Confirmado', detail:'Registro salvo com sucesso'}];
      },
      error => {
        this.msgs = [{severity:'error', summary:'Erro', detail:'Certifique-se de preencher todos os campos.'}];
    });
  }

  editar(ccusto: Ccusto) {
    this.ccustoEdit = ccusto;
    this.showDialog = true;
    this.msgs = [{severity:'sucess', summary:'Confirmado', detail:'Registro alterado com sucesso'}];
  }

  remover(ccusto: Ccusto) {
    this.ccustoService.delete(ccusto.id).subscribe(() => {
      this.findAll();
      this.showConfirm = false;
    });
  }

  confirm(ccusto: Ccusto) {
    this.confirmationService.confirm({
      message: 'Essa ação não poderá ser desfeita',
      header: 'Deseja remover esse registro?',
      accept: () => {
        this.ccustoService.delete(ccusto.id).subscribe(() => {
          this.findAll();
          this.msgs = [{severity:'sucess', summary:'Confirmado', detail:'Registro removido com sucesso'}];
        });
      }
    });
  }
}
