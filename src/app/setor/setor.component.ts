import {Component, OnInit} from '@angular/core';
import {SetorService} from './setor.service';
import {Setor} from './setor';

@Component({
  templateUrl: './setor.component.html',
  styleUrls: ['./setor.component.css']
})
export class SetorComponent implements OnInit {

  setores: Setor[];
  showDialog = false;
  setorEdit = new Setor();

  constructor(private setorService: SetorService) {
  }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.setorService.findAll().subscribe(e => this.setores = e);
  }

  novo() {
    this.showDialog = true;
    this.setorEdit = new Setor();
  }

  salvar() {
    this.setorService.save(this.setorEdit).subscribe(e => {
      this.setorEdit = new Setor();
      this.findAll();
      this.showDialog = false;
    });
  }

  editar(setor: Setor) {
    this.setorEdit = setor;
    this.showDialog = true;
  }

  remover(setor: Setor) {
    this.setorService.delete(setor.id).subscribe(() => {
      this.findAll();
    });
  }
}
