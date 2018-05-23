import {Component, OnInit} from '@angular/core';
import {AtributoService} from './atributo.service';
import {Atributo} from './atributo';

@Component({
  templateUrl: './atributo.component.html',
  styleUrls: ['./atributo.component.css']
})
export class AtributoComponent implements OnInit {

  atributos: Atributo[];
  showDialog = false;
  atributoEdit = new Atributo();

  constructor(private atributoService: AtributoService) {
  }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.atributoService.findAll().subscribe(e => this.atributos = e);
  }

  novo() {
    this.showDialog = true;
    this.atributoEdit = new Atributo();
  }

  salvar() {
    this.atributoService.save(this.atributoEdit).subscribe(e => {
      this.atributoEdit = new Atributo();
      this.findAll();
      this.showDialog = false;
    });
  }

  editar(atributo: Atributo) {
    this.atributoEdit = atributo;
    this.showDialog = true;
  }

  remover(atributo: Atributo) {
    this.atributoService.delete(atributo.id).subscribe(() => {
      this.findAll();
    });
  }
}
