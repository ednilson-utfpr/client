import {Component, OnInit} from '@angular/core';
import {FuncionarioService} from './funcionario.service';
import {Funcionario} from './funcionario';

@Component({
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {

  funcionarios: Funcionario[];
  showDialog = false;
  funcionarioEdit = new Funcionario();

  constructor(private funcionarioService: FuncionarioService) {
  }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.funcionarioService.findAll().subscribe(e => this.funcionarios = e);
  }

  novo() {
    this.showDialog = true;
    this.funcionarioEdit = new Funcionario();
  }

  salvar() {
    this.funcionarioService.save(this.funcionarioEdit).subscribe(e => {
      this.funcionarioEdit = new Funcionario();
      this.findAll();
      this.showDialog = false;
    });
  }

  editar(funcionario: Funcionario) {
    this.funcionarioEdit = funcionario;
    this.showDialog = true;
  }

  remover(funcionario: Funcionario) {
    this.funcionarioService.delete(funcionario.id).subscribe(() => {
      this.findAll();
    });
  }
}
