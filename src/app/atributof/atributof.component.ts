import {Component, OnInit} from '@angular/core';
import {AtributofService} from './atributof.service';
import {Atributof} from './atributof';
import {AtributoService} from '../atributo/atributo.service';
import {Atributo} from '../atributo/atributo';
import {FuncionarioService} from '../funcionario/funcionario.service';
import {Funcionario} from '../funcionario/funcionario';
import {Message} from 'primeng/api';
import {LoginService} from '../login/login.service';
import {ConfirmationService} from 'primeng/api';

@Component({
  templateUrl: './atributof.component.html',
  styleUrls: ['./atributof.component.css']
})

export class AtributofComponent implements OnInit {

  atributofs: Atributof[];
  showDialog = false;
  showConfirm = false;
  atributofEdit = new Atributof();
  atributos: Atributo[];
  funcionarios: Funcionario[];
  pt: any;
  msgs: Message[] = [];

  constructor(private atributofService: AtributofService, private atributoService: AtributoService,
      private funcionarioService: FuncionarioService, private loginService: LoginService,
      private confirmationService: ConfirmationService) {}

  hasRole(role: string): boolean {
    return this.loginService.hasRole(role);
  }

  ngOnInit(): void {
    this.findAll();
    this.atributoService.findAll().subscribe(e => this.atributos = e);
    this.funcionarioService.findAll().subscribe(e => this.funcionarios = e);

    this.pt = {
      monthNames : [ 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
        'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro' ],
      monthNamesShort : [ 'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez' ],
      dayNames : [ 'Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado' ],
      dayNamesShort : [ 'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb' ],
      dayNamesMin : [ 'D', 'S', 'T', 'Q', 'Q', 'S', 'S' ],
    };
  }

  findAll() {
    this.atributofService.findAll().subscribe(e => this.atributofs = e);
  }

  novo() {
    this.showDialog = true;
    this.atributofEdit = new Atributof();
  }

  salvar() {
    console.log(this.atributofEdit);
    this.atributofService.save(this.atributofEdit).subscribe(e => {
      this.atributofEdit = new Atributof();
      this.findAll();
      this.showDialog = false;
    });
  }

  editar(atributof: Atributof) {
    this.atributofEdit = atributof;
    this.showDialog = true;
  }

  confirmDelete(atributof: Atributof) {
        this.confirmationService.confirm({
            message: 'Essa ação não poderá ser desfeita',
            header: 'Deseja remover esse registro?',
            accept: () => {
                this.atributofService.delete(atributof.id).subscribe(() => {
                this.findAll();
                this.msgs = [{severity:'sucess', summary:'Confirmado', detail:'Registro removido com sucesso'}];
              });
            }
        });
    }
}
