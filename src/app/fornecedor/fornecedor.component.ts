import {Component, OnInit} from '@angular/core';
import {FornecedorService} from './fornecedor.service';
import {Fornecedor} from './fornecedor';
import {EstadoService} from '../estado/estado.service';
import {CidadeService} from '../cidade/cidade.service';
import {Estado} from '../estado/estado';
import {Cidade} from '../cidade/cidade';

@Component({
  templateUrl: './fornecedor.component.html',
  styleUrls: ['./fornecedor.component.css']
})
export class FornecedorComponent implements OnInit {

  fornecedores: Fornecedor[];
  showDialog = false;
  fornecedorEdit = new Fornecedor();
  cidades: Cidade[];
  estados: Estado[];

  constructor(private fornecedorService: FornecedorService, private estadoService: EstadoService, private cidadeService:CidadeService) {
  }

  ngOnInit(): void {
    this.findAll();
    this.estadoService.findAll().subscribe(e => this.estados = e);
  }
  
  buscaCidades(estado): void{
  	this.cidadeService.findByEstado(estado).subscribe(c => this.cidades = c);
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
