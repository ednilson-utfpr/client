import {Component, OnInit} from '@angular/core';
import {PessoaService} from './pessoa.service';
import {Pessoa} from './pessoa';

@Component({
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  pessoas: Pessoa[];
  showDialog = false;
  pessoaEdit = new Pessoa();

  constructor(private pessoaService: PessoaService) 
  { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.pessoaService.findAll().subscribe(e => this.pessoas = e);
  }

  novo() {
    this.showDialog = true;
    this.pessoaEdit = new Pessoa();
  }

  salvar() {
    this.pessoaService.save(this.pessoaEdit).subscribe(e => {
      this.pessoaEdit = new Pessoa();
      this.findAll();
      this.showDialog = false;
    });
  }

  editar(pessoa: Pessoa) {
    this.pessoaEdit = pessoa;
    this.showDialog = true;
  }

  remover(pessoa: Pessoa) {
    this.pessoaService.delete(pessoa.id).subscribe(() => {
      this.findAll();
    });
  }
}
