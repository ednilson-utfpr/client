import { LoginService } from './../login/login.service';
import {Component, OnInit} from '@angular/core';
import {CcustoService} from './ccusto.service';
import {Ccusto} from './ccusto';

@Component({
  templateUrl: './ccusto.component.html',
  styleUrls: ['./ccusto.component.css']
})
export class CcustoComponent implements OnInit {

  ccustos: Ccusto[];
  showDialog = false;
  ccustoEdit = new Ccusto();

  constructor(private ccustoService: CcustoService, private loginService: LoginService) {
  }

  hasRole(role: string): boolean {
    return this.loginService.hasRole(role);
  }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.ccustoService.findAll().subscribe(e => this.ccustos = e);
  }

  novo() {
    this.showDialog = true;
    this.ccustoEdit = new Ccusto();
  }

  salvar() {
    this.ccustoService.save(this.ccustoEdit).subscribe(e => {
      this.ccustoEdit = new Ccusto();
      this.findAll();
      this.showDialog = false;
    });
  }

  editar(ccusto: Ccusto) {
    this.ccustoEdit = ccusto;
    this.showDialog = true;
  }

  remover(ccusto: Ccusto) {
    this.ccustoService.delete(ccusto.id).subscribe(() => {
      this.findAll();
    });
  }
}
