import { PerfilService } from './../perfil/perfil.service';
import {Component, OnInit} from '@angular/core';
import {UsuarioService} from './usuario.service';
import {Usuario} from './usuario';
import { Perfil } from '../perfil/perfil';

@Component({
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarios: Usuario[];
  perfils: Perfil[];
  showDialog = false;
  usuarioEdit = new Usuario();
  perfilEdit = new Perfil();

  constructor(private usuarioService: UsuarioService, private perfilService: PerfilService) {
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
    this.usuarioService.save(this.usuarioEdit).subscribe(e => {
      this.usuarioEdit = new Usuario();
      this.findAll();
      this.showDialog = false;
    });
  }

  editar(usuario: Usuario) {
    this.usuarioEdit = usuario;
    this.showDialog = true;
  }

  remover(usuario: Usuario) {
    this.usuarioService.delete(usuario.id).subscribe(() => {
      this.findAll();
    });
  }
}
