import {Component, OnInit} from '@angular/core';
import {FornecedorService} from './fornecedor.service';
import {PessoaService} from '../pessoa/pessoa.service';
import {Fornecedor} from './fornecedor';
import {Pessoa} from '../pessoa/pessoa';

@Component({
  templateUrl: './fornecedor.component.html',
  styleUrls: ['./fornecedor.component.css']
})
export class FornecedorComponent implements OnInit {

  fornecedores: Fornecedor[];
  pessoas: Pessoa[];
  showDialog = false;
  fornecedorEdit = new Fornecedor();

  constructor(private fornecedorService: FornecedorService, private pessoaService: PessoaService) {
  }

  ngOnInit(): void {
    this.findAll();
    this.pessoaService.findAll().subscribe(e => this.pessoas = e);
  }

  findAll() {
    this.fornecedorService.findAll().subscribe(e => this.fornecedores = e);
  }

  novo() {
    this.showDialog = true;
    this.fornecedorEdit = new Fornecedor();
  }

  salvar() {
    this.fornecedorService.save(this.fornecedorEdit).subscribe(e => {
      this.fornecedorEdit = new Fornecedor();
      this.findAll();
      this.showDialog = false;
    });
  }

  editar(fornecedor: Fornecedor) {
    this.fornecedorEdit = fornecedor;
    this.showDialog = true;
  }

  remover(fornecedor: Fornecedor) {
    this.fornecedorService.delete(fornecedor.id).subscribe(() => {
      this.findAll();
    });
  }
}
