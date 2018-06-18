import {Component, OnInit} from '@angular/core';
import {PerfilService} from './perfil.service';
import {Perfil} from './perfil';
import {Message} from 'primeng/api';

@Component({
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  perfils: Perfil[];
  showDialog = false;
  showConfirm = false;
  perfilEdit = new Perfil();

  constructor(private perfilService: PerfilService) {
  }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.perfilService.findAll().subscribe(e => this.perfils = e);
  }

  novo() {
    this.showDialog = true;
    this.perfilEdit = new Perfil();
  }

  salvar() {
    this.perfilService.save(this.perfilEdit).subscribe(e => {
      this.perfilEdit = new Perfil();
      this.findAll();
      this.showDialog = false;
    });
  }

  editar(perfil: Perfil) {
    this.perfilEdit = perfil;
    this.showDialog = true;
  }

  remover(perfil: Perfil) {
    this.perfilService.delete(perfil.id).subscribe(() => {
      this.findAll();
      this.showConfirm = false;
    });
  }

  mostrarConfirm(condicao: boolean) {
    this.showConfirm = condicao;
  }
}
