///<reference path="../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {Component, OnInit} from '@angular/core';
import {CentroCustoService} from './centroCusto.service';
import {CentroCusto} from './centroCusto';

@Component({
  templateUrl: './centroCusto.component.html',
  styleUrls: ['./centroCusto.component.css']
})
export class CentroCustoComponent implements OnInit {

  centroCustos: CentroCusto[];
  showDialog = false;
  centroCustoEdit = new CentroCusto();

  constructor(private centroCustoService: CentroCustoService) {
  }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.centroCustoService.findAll().subscribe(e => this.centroCustos = e);
  }

  novo() {
    this.showDialog = true;
    this.centroCustoEdit = new CentroCusto();
  }

  salvar() {
    this.centroCustoService.save(this.centroCustoEdit).subscribe(e => {
      this.centroCustoEdit = new CentroCusto();
      this.findAll();
      this.showDialog = false;
    });
  }

  editar(centroCusto: CentroCusto) {
    this.centroCustoEdit = centroCusto;
    this.showDialog = true;
  }

  remover(centroCusto: CentroCusto) {
    this.centroCustoService.delete(centroCusto.id).subscribe(() => {
      this.findAll();
    });
  }
}
