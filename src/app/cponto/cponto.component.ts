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


  constructor(private cpontoService: CpontoService
              , private funcionarioService: FuncionarioService
  ) {
  }

  ngOnInit(): void {
    this.findAll();
    this.funcionarioService.findAll().subscribe(e => this.funcionarios = e);

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
