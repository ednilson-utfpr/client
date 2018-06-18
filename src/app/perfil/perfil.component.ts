import {Component, OnInit} from '@angular/core';
import {PerfilService} from './perfil.service';
import {Perfil} from './perfil';
<<<<<<< HEAD
import {ConfirmationService, Message} from 'primeng/api';
import {LoginService} from '../login/login.service'; 

=======
import {Message} from 'primeng/api';
>>>>>>> 23278e4c3915e1893063d71e2c4fd71f5afcac7d

@Component({
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  perfils: Perfil[];
  showDialog = false;
  showConfirm = false;
  perfilEdit = new Perfil();

<<<<<<< HEAD
  constructor(private perfilService: PerfilService, private confirmationService: ConfirmationService,
   private loginService: LoginService) {
=======
  constructor(private perfilService: PerfilService) {
>>>>>>> 23278e4c3915e1893063d71e2c4fd71f5afcac7d
  }

  hasRole(role: string): boolean {
    return this.loginService.hasRole(role);
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
