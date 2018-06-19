import { HttpRequest } from '@angular/common/http';
import { PerfilService } from './../perfil/perfil.service';
import {Component, OnInit} from '@angular/core';
import {UsuarioService} from './usuario.service';
import {Usuario} from './usuario';
import { Perfil } from '../perfil/perfil';
import {ConfirmationService, Message} from 'primeng/api';
import {LoginService} from '../login/login.service';

@Component({
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarios: Usuario[];
  perfils: Perfil[];
  showDialog = false;
  showConfirm = false;
  usuarioEdit = new Usuario();
  perfilEdit = new Perfil();
  msgs: Message[] = [];

  constructor(private usuarioService: UsuarioService, private perfilService: PerfilService,
      private confirmationService: ConfirmationService,
      private loginService: LoginService) {
  }

  hasRole(role: string): boolean {
    return this.loginService.hasRole(role);
  }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.usuarioService.findAll().subscribe(e => this.usuarios = e);
    this.perfilService.findAll().subscribe(e => this.perfils = e);
  }

  novo() {
    this.showDialog = true;
    this.usuarioEdit = new Usuario();
  }

  salvar() {
    console.log(this.usuarioEdit);
    this.usuarioService.save(this.usuarioEdit).subscribe(e => {
      this.usuarioEdit = new Usuario();
      this.findAll();
      this.showDialog = false;
      this.msgs = [{severity:'sucess', summary:'Confirmado', detail:'Registro salvo com sucesso'}];
    },
    error => {
      this.msgs = [{severity:'error', summary:'Erro', detail: error.error.message}];
    });
  }

  editar(usuario: Usuario) {
    usuario.authorities = null;
    this.usuarioEdit = usuario;
    this.showDialog = true;
    this.msgs = [{severity:'sucess', summary:'Confirmado', detail:'Registro alterado com sucesso'}];
  }

  confirmDelete(usuario: Usuario) {
        this.confirmationService.confirm({
            message: 'Essa ação não poderá ser desfeita',
            header: 'Deseja remover esse registro?',
            accept: () => {
                this.usuarioService.delete(usuario.id).subscribe(() => {
                this.findAll();
                this.msgs = [{severity:'sucess', summary:'Confirmado', detail:'Registro removido com sucesso'}];
              });
            }
        });
    }
}
