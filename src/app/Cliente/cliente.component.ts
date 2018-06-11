import {Component, OnInit} from '@angular/core';
import {ClienteService} from './cliente.service';
import {Cliente} from './cliente';
import {EstadoService} from '../estado/estado.service';
import {CidadeService} from '../cidade/cidade.service';
import {Estado} from '../estado/estado';
import {Cidade} from '../cidade/cidade';

@Component({
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  clientes: Cliente[];
  showDialog = false;
  clienteEdit = new Cliente();
  cidades: Cidade[];
  estados: Estado[];

  constructor(private clienteService: ClienteService, private estadoService: EstadoService, private cidadeService:CidadeService) {
  }

  ngOnInit(): void {
    this.findAll();
    this.estadoService.findAll().subscribe(e => this.estados = e);
  }
  
  buscaCidades(estado): void{
  	this.cidadeService.findByEstado(estado).subscribe(c => this.cidades = c);
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
