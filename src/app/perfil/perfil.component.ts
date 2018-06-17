import {Component, OnInit} from '@angular/core';
import {PerfilService} from './perfil.service';
import {Perfil} from './perfil';
import {ConfirmationService, Message} from 'primeng/api';

@Component({
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  perfils: Perfil[];
  showDialog = false;
  perfilEdit = new Perfil();

  constructor(private perfilService: PerfilService, private confirmationService: ConfirmationService) {
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
    });
  }

  confirm(perfil: Perfil) {
    this.confirmationService.confirm({
      header: 'Confirmacao',  
      message: 'Deseja remover o registro?',
      accept: () => {
        this.remover(perfil);
      }
    });
  }
}
