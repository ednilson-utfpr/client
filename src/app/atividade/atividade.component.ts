import {Component, OnInit} from '@angular/core';
import {AtividadeService} from './atividade.service';
import {Atividade} from './atividade';
// import {Obra} from '../obra/obra';
// import {ObraService} from '../obra/obra.service';

@Component({
  templateUrl: './atividade.component.html',
  styleUrls: ['./atividade.component.css']
})
export class AtividadeComponent implements OnInit {

  atividades: Atividade[];
  showDialog = false;
  atividadeEdit = new Atividade();
  // obras: Obra[];

  constructor(private atividadeService: AtividadeService
              // , private obraService: ObraService
          ) {
  }

  ngOnInit(): void {
    this.findAll();
    // this.obraService.findAll().subscribe(e => this.obras = e);

  }

  findAll() {
    this.atividadeService.findAll().subscribe(e => this.atividades = e);
  }

  novo() {
    this.showDialog = true;
    this.atividadeEdit = new Atividade();
  }

  salvar() {
    this.atividadeService.save(this.atividadeEdit).subscribe(e => {
      this.atividadeEdit = new Atividade();
      this.findAll();
      this.showDialog = false;
    });
  }

  editar(atividade: Atividade) {
    this.atividadeEdit = atividade;
    this.showDialog = true;
  }

  remover(atividade: Atividade) {
    this.atividadeService.delete(atividade.id).subscribe(() => {
      this.findAll();
    });
  }






}
