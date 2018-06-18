import { LoginService } from './../login/login.service';
import {Component, OnInit} from '@angular/core';
import {CargoService} from './cargo.service';
import {Cargo} from './cargo';

@Component({
  templateUrl: './cargo.component.html',
  styleUrls: ['./cargo.component.css']
})
export class CargoComponent implements OnInit {

  cargos: Cargo[];
  showDialog = false;
  cargoEdit = new Cargo();

  constructor(private cargoService: CargoService, private loginService: LoginService) {
  }

  hasRole(role: string): boolean {
    return this.loginService.hasRole(role);
  }


  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.cargoService.findAll().subscribe(e => this.cargos = e);
  }

  novo() {
    this.showDialog = true;
    this.cargoEdit = new Cargo();
  }

  salvar() {
    this.cargoService.save(this.cargoEdit).subscribe(e => {
      this.cargoEdit = new Cargo();
      this.findAll();
      this.showDialog = false;
    });
  }

  editar(cargo: Cargo) {
    this.cargoEdit = cargo;
    this.showDialog = true;
  }

  remover(cargo: Cargo) {
    this.cargoService.delete(cargo.id).subscribe(() => {
      this.findAll();
    });
  }
}
