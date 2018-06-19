import {Component, OnInit} from '@angular/core';
import {CidadeService} from './cidade.service';
import {Cidade} from './cidade';

@Component({
  templateUrl: './cidade.component.html',
  styleUrls: ['./cidade.component.css']
})
export class CidadeComponent implements OnInit {

  cidades: Cidade[];
  showDialog = false;
  cidadeEdit = new Cidade();

  constructor(private cidadeService: CidadeService) {
  }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.cidadeService.findAll().subscribe(e => this.cidades = e);
  }

  novo() {
    this.showDialog = true;
    this.cidadeEdit = new Cidade();
  }

  salvar() {
    this.cidadeService.save(this.cidadeEdit).subscribe(e => {
      this.cidadeEdit = new Cidade();
      this.findAll();
      this.showDialog = false;
    });
  }

  editar(cidade: Cidade) {
    this.cidadeEdit = cidade;
    this.showDialog = true;
  }

  remover(cidade: Cidade) {
    this.cidadeService.delete(cidade.id).subscribe(() => {
      this.findAll();
    });
  }
}
