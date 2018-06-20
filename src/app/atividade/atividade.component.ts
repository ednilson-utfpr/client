import {Component, OnInit} from '@angular/core';
import {AtividadeService} from './atividade.service';
import {Atividade} from './atividade';
import {FuncionarioService} from '../funcionario/funcionario.service';
import {Funcionario} from '../funcionario/funcionario';
import {AtributoService} from '../atributo/atributo.service';
import {Atributo} from '../atributo/atributo';
import {AtributofService} from '../atributof/atributof.service';
import {ConfirmationService, Message} from 'primeng/api';
// import {Obra} from '../obra/obra';
// import {ObraService} from '../obra/obra.service';
import {LoginService} from '../login/login.service';
import {Atributof} from '../atributof/atributof';


@Component({
  templateUrl: './atividade.component.html',
  styleUrls: ['./atividade.component.css']
})
export class AtividadeComponent implements OnInit {

  atividades: Atividade[];
  // obras: Obra[];
  atributos: Atributo[];
  funcionarios: Funcionario[];
  l: Atributof[];
  funcTemp: Array<Funcionario> = [];

  showDialog = false;
  atividadeEdit = new Atividade();
  funcionarioEdit = new Funcionario();
  pt: any;
  msgs: Message[] = [];

  constructor(private atividadeService: AtividadeService
    , private funcionarioService: FuncionarioService
    , private atributoService: AtributoService
    , private atributoFuncService: AtributofService
    , private loginService: LoginService
    , private confirmationService: ConfirmationService
    // , private obraService: ObraService

  ) {
  }

  ngOnInit(): void {
    this.findAll();
    // this.obraService.findAll().subscribe(e => this.obras = e);
    this.funcionarioService.findAll().subscribe(e => this.funcionarios = e);
    this.atributoService.findAll().subscribe(e => this.atributos = e);

    this.pt = {
      monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
        'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
      dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
      dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
    };
  }


  hasRole(role: string): boolean {
    return this.loginService.hasRole(role);
  }



  atributoChange() {
    if (this.atividadeEdit.atributo.length > 0) {
      this.funcionarios = [];
      this.atributoFuncService.findAll().subscribe(e =>{

        this.atividadeEdit.atributo.forEach(attrib => {
          this.l =  e.filter(af => af.atributo.id === attrib.id);
        });
        this.l.forEach(af => {
          this.funcTemp.push(af.funcionario);
        });
        this.funcionarios = this.funcTemp;
        this.funcTemp = [];
      });
    } else {
      this.funcionarioService.findAll().subscribe(e => this.funcionarios = e);
    }
  }

  findAll() {
    this.atividadeService.findAll().subscribe(e => this.atividades = e);
  }

  novo() {
    this.showDialog = true;
    this.atividadeEdit = new Atividade();
  }

  salvar(){
    this.atividadeService.save(this.atividadeEdit).subscribe(e => {
      this.atividadeEdit = new Atividade();
      this.findAll();
      this.showDialog = false;
        this.msgs = [{severity:'sucess', summary:'Confirmado', detail:'Registro salvo com sucesso'}];
      },
      error => {
        this.msgs = [{severity:'error', summary:'Erro', detail:'Certifique-se de preencher todos os campos.'}];
    });
  }

  editar(atividade: Atividade) {
    this.atividadeEdit = atividade;
    this.showDialog = true;
  this.msgs = [{severity:'sucess', summary:'Confirmado', detail:'Registro alterado com sucesso'}];
  }

  confirm(atividade: Atividade) {
    this.confirmationService.confirm({
      message: 'Essa ação não poderá ser desfeita',
      header: 'Deseja remover esse registro?',
      accept: () => {
        this.atividadeService.delete(atividade.id).subscribe(() => {
          this.findAll();
          this.msgs = [{severity:'sucess', summary:'Confirmado', detail:'Registro removido com sucesso'}];
        });
      }
    });
  }


}
