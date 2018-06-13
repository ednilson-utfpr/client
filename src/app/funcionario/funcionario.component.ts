import {Component, OnInit} from '@angular/core';
import {FuncionarioService} from './funcionario.service';
import {Funcionario} from './funcionario';
import { CargoService } from '../cargo/cargo.service';
import { Cargo } from '../cargo/cargo';
import { SetorService } from '../setor/setor.service';
import { Setor } from '../setor/setor';

@Component({
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {

  funcionarios: Funcionario[];
  showDialog = false;
  funcionarioEdit = new Funcionario();
  cargos: Cargo[];
  setores: Setor[];

  constructor(private funcionarioService: FuncionarioService
              , private cargoService: CargoService, private setorService: SetorService
) {

  }

  ngOnInit(): void {
    this.findAll();
    this.cargoService.findAll().subscribe(e => this.cargos = e);
    this.setorService.findAll().subscribe(e => this.setores = e);
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
