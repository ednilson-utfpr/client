import {Component, OnInit} from '@angular/core';
import {AtividadeService} from './atividade.service';
import {Atividade} from './atividade';
import {FuncionarioService} from '../funcionario/funcionario.service';
import {Funcionario} from '../funcionario/funcionario';
import {AtributoService} from '../atributo/atributo.service';
import {Atributo} from '../atributo/atributo';
// import {Obra} from '../obra/obra';
// import {ObraService} from '../obra/obra.service';

@Component({
  templateUrl: './atividade.component.html',
  styleUrls: ['./atividade.component.css']
})
export class AtividadeComponent implements OnInit {

  atividades: Atividade[];
  // obras: Obra[];
  atributos: Atributo[];
  funcionarios: Funcionario[];
  showDialog = false;
  atividadeEdit = new Atividade();
  funcionarioEdit = new Funcionario();
  pt: any;


  constructor(private atividadeService: AtividadeService
            , private funcionarioService: FuncionarioService
            , private atributoService: AtributoService
              // , private obraService: ObraService
          ) {
  }

  ngOnInit(): void {
    this.findAll();
    // this.obraService.findAll().subscribe(e => this.obras = e);
    this.funcionarioService.findAll().subscribe(e => this.funcionarios = e);
    this.atributoService.findAll().subscribe(e => this.atributos = e);

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
    this.atividadeService.findAll().subscribe(e => this.atividades = e);
  }

  novo() {
    this.showDialog = true;
    this.atividadeEdit = new Atividade();
  }

  salvar() {
    this.atividadeService.save(this.atividadeEdit).subscribe(e => {
      this.atividadeEdit = new Atividade();
      this.findAll();
      this.showDialog = false;
    });
  }

  editar(atividade: Atividade) {
    this.atividadeEdit = atividade;
    this.showDialog = true;
  }

  remover(atividade: Atividade) {
    this.atividadeService.delete(atividade.id).subscribe(() => {
      this.findAll();
    });
  }






}
