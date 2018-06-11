import {Component, OnInit} from '@angular/core';
import {CpontoService} from './cponto.service';
import {Cponto} from './cponto';
import {Funcionario} from '../funcionario/funcionario';
import {FuncionarioService} from '../funcionario/funcionario.service';

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


  constructor(private cpontoService: CpontoService
    , private funcionarioService: FuncionarioService
  ) {
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
    });
  }

  editar(cponto: Cponto) {
    this.cpontoEdit = cponto;
    this.showDialog = true;
  }

  remover(cponto: Cponto) {
    this.cpontoService.delete(cponto.id).subscribe(() => {
      this.findAll();
    });
  }


}
