import {Component, OnInit} from '@angular/core';
import {EstadoService} from './estado.service';
import {Estado} from './estado';

@Component({
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.css']
})
export class EstadoComponent implements OnInit {

  estados: Estado[];
  showDialog = false;
  estadoEdit = new Estado();

  constructor(private estadoService: EstadoService) {
  }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.estadoService.findAll().subscribe(e => this.estados = e);
  }

  novo() {
    this.showDialog = true;
    this.estadoEdit = new Estado();
  }

  salvar() {
    this.estadoService.save(this.estadoEdit).subscribe(e => {
      this.estadoEdit = new Estado();
      this.findAll();
      this.showDialog = false;
    });
  }

  editar(estado: Estado) {
    this.estadoEdit = estado;
    this.showDialog = true;
  }

  remover(estado: Estado) {
    this.estadoService.delete(estado.id).subscribe(() => {
      this.findAll();
    });
  }
}
