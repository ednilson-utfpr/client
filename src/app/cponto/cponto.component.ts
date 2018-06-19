import { LoginService } from './../login/login.service';
import {Component, OnInit} from '@angular/core';
import {CpontoService} from './cponto.service';
import {Cponto} from './cponto';
import {Funcionario} from '../funcionario/funcionario';
import {FuncionarioService} from '../funcionario/funcionario.service';
import {ConfirmationService, Message} from 'primeng/api';
import {Atividade} from '../atividade/atividade';

@Component({
  templateUrl: './cponto.component.html',
  styleUrls: ['./cponto.component.css']
})
export class CpontoComponent implements OnInit {

  cpontos: Cponto[];
  funcionarios: Funcionario[];
  showDialog = false;
  cpontoEdit = new Cponto();
  funcionarioEdit = new Funcionario();
  pt: any;
  msgs: Message[] = [];

  constructor(private cpontoService: CpontoService
    , private funcionarioService: FuncionarioService
    , private loginService: LoginService
    , private confirmationService: ConfirmationService

  ) {
  }

  hasRole(role: string): boolean {
    return this.loginService.hasRole(role);
  }


  ngOnInit(): void {
    this.findAll();
    this.funcionarioService.findAll().subscribe(e => this.funcionarios =
      e.filter(funcionario => funcionario.ativo)
    );

    this.pt = {
      monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
        'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
      dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
      dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
    };
  }

  findAll() {
    this.cpontoService.findAll().subscribe(e => this.cpontos = e);
  }

  novo() {
    this.showDialog = true;
    this.cpontoEdit = new Cponto();
  }

  salvar() {
    this.cpontoService.save(this.cpontoEdit).subscribe(e => {
      this.cpontoEdit = new Cponto();
      this.findAll();
      this.showDialog = false;
        this.msgs = [{severity:'sucess', summary:'Confirmado', detail:'Registro salvo com sucesso'}];
      },
      error => {
        this.msgs = [{severity:'error', summary:'Erro', detail:'Certifique-se de preencher todos os campos.'}];
      });
  }

  editar(cponto: Cponto) {
    this.cpontoEdit = cponto;
    this.showDialog = true;
  }

  remover(cponto: Cponto) {
    this.cpontoService.delete(cponto.id).subscribe(() => {
      this.findAll();
      this.showConfirm = false;
    });
  }


  confirm(cponto: Cponto) {
    this.confirmationService.confirm({
      message: 'Essa ação não poderá ser desfeita',
      header: 'Deseja remover esse registro?',
      accept: () => {
        this.cpontoService.delete(cponto.id).subscribe(() => {
          this.findAll();
          this.msgs = [{severity:'sucess', summary:'Confirmado', detail:'Registro removido com sucesso'}];
        });
      }
    });
  }
}
