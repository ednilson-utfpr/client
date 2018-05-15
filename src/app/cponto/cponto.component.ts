import {Component, OnInit} from '@angular/core';
import {CpontoService} from './cponto.service';
import {Cponto} from './cponto';

@Component({
  templateUrl: './cponto.component.html',
  styleUrls: ['./cponto.component.css']
})
export class CpontoComponent implements OnInit {

  cpontos: Cponto[];
  showDialog = false;
  cpontoEdit = new Cponto();

  constructor(private cpontoService: CpontoService) {
  }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.cpontoService.findAll().subscribe(e => this.cpontos = e);
  }

  novo() {
    this.showDialog = true;
    this.cpontoEdit = new Cponto();
  }

  salvar() {
    this.cpontoService.save(this.cpontoEdit).subscribe(e => {
      this.cpontoEdit = new Cponto();
      this.findAll();
      this.showDialog = false;
    });
  }

  editar(cponto: Cponto) {
    this.cpontoEdit = cponto;
    this.showDialog = true;
  }

  remover(cponto: Cponto) {
    this.cpontoService.delete(cponto.id).subscribe(() => {
      this.findAll();
    });
  }






}
