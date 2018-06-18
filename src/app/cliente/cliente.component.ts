import {Component, OnInit} from '@angular/core';
import {ClienteService} from './cliente.service';
import {PessoaService} from '../pessoa/pessoa.service';
import {Cliente} from './cliente';
import {Pessoa} from '../pessoa/pessoa';

@Component({
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  clientes: Cliente[];
  pessoas: Pessoa[];
  showDialog = false;
  clienteEdit = new Cliente();

  constructor(private clienteService: ClienteService, private pessoaService: PessoaService) {
  }

  ngOnInit(): void {
    this.findAll();
    this.pessoaService.findAll().subscribe(e => this.pessoas = e);
  }

  findAll() {
    this.clienteService.findAll().subscribe(e => this.clientes = e);
  }

  novo() {
    this.showDialog = true;
    this.clienteEdit = new Cliente();
  }

  salvar() {
    this.clienteService.save(this.clienteEdit).subscribe(e => {
      this.clienteEdit = new Cliente();
      this.findAll();
      this.showDialog = false;
    });
  }

  editar(cliente: Cliente) {
    this.clienteEdit = cliente;
    this.showDialog = true;
  }

  remover(cliente: Cliente) {
    this.clienteService.delete(cliente.id).subscribe(() => {
      this.findAll();
    });
  }
}
