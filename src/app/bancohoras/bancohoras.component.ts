import {Component, OnInit} from '@angular/core';
import {Cponto} from '../cponto/cponto';
import {Funcionario} from '../funcionario/funcionario';
import {CpontoService} from '../cponto/cponto.service';
import {FuncionarioService} from '../funcionario/funcionario.service';
import {DatePipe} from '@angular/common';
import {LocaleSettings} from 'primeng/primeng';
import {Bancohoras} from './bancohoras';

@Component({
  templateUrl: './bancohoras.component.html',
  styleUrls: ['./bancohoras.component.css']
})
export class BancohorasComponent implements OnInit {

  cpontos: Cponto[];
  funcionarios: Funcionario[];
  funcionarioFilter: Funcionario;
  dataIniFilter: Date;
  dataFimFilter: Date;
  count: number;
  bancoHoras: Bancohoras[] = [];


  constructor(private cpontoService: CpontoService,
              private funcionarioService: FuncionarioService,
              private datePipe: DatePipe) {
  }

  ngOnInit() {
    this.funcionarioService.findAll().subscribe(e => this.funcionarios = e);
    // this.cpontoService.findAll().subscribe(e => this.cpontos = e);
    this.count = 0;
  }


  applyFilter() {
    if (this.funcionarioFilter === undefined) {
      alert('Selecione um funcionário!');
      return;
    }
    this.bancoHoras = [];
    this.cpontoService.findAll().subscribe(e => {
        e
          .filter(cponto => (this.funcionarioFilter !== undefined ? cponto.funcionario.id === this.funcionarioFilter.id : true))
          .filter(cponto => (this.dataIniFilter !== undefined ? cponto.data >= this.dataIniFilter : true))
          .filter(cponto => (this.dataFimFilter !== undefined ? cponto.data <= this.dataFimFilter : true))
          .forEach(cponto => {
            if (this.bancoHoras.length === 0) {
              const bh: Bancohoras = new Bancohoras();
              bh.data = cponto.data;
              bh.funcionario = cponto.funcionario;
              bh.horas = this.horasSaldo(cponto.entrada, cponto.saida);
              bh.minutos = this.minutosSaldo(cponto.entrada, cponto.saida);
              this.bancoHoras.push(bh);
            } else {
              let bAchou = false;
              for (let i = 0; i < this.bancoHoras.length; i++) {
                if (this.bancoHoras[i].data === cponto.data) {
                  this.bancoHoras[i].minutos += this.minutosSaldo(cponto.entrada, cponto.saida);
                  this.bancoHoras[i].horas += this.horasSaldo(cponto.entrada, cponto.saida);
                  bAchou = true;
                  break;
                }
                if (!bAchou) {
                  const bh: Bancohoras = new Bancohoras();
                  bh.data = cponto.data;
                  bh.funcionario = cponto.funcionario;
                  bh.horas = this.horasSaldo(cponto.entrada, cponto.saida);
                  bh.minutos = this.minutosSaldo(cponto.entrada, cponto.saida);
                  this.bancoHoras.push(bh);
                }
              }
            }
          });
        this.cpontos = e
          .filter(cponto => (this.funcionarioFilter !== undefined ? cponto.funcionario.id === this.funcionarioFilter.id : true))
          .filter(cponto => (this.dataIniFilter !== undefined ? cponto.data >= this.dataIniFilter : true))
          .filter(cponto => (this.dataFimFilter !== undefined ? cponto.data <= this.dataFimFilter : true));
      }
    );
  }

  horasSaldo(entrada: String, saida: String) {
    const ent: any = Date.parse('2000-01-01 ' + entrada);
    let sai: any = Date.parse('2000-01-01 ' + saida);
    if (ent > sai) {
      sai = Date.parse('2000-01-02 ' + saida);
    }
    let dif = (sai - ent);

    dif = dif / 1000;
    dif = dif / 60;
    return Math.trunc(dif / 60);
  }

  minutosSaldo(entrada: String, saida: String) {
    const ent: any = Date.parse('2000-01-01 ' + entrada);
    let sai: any = Date.parse('2000-01-01 ' + saida);
    if( ent > sai ){
      sai = Date.parse('2000-01-02 ' + saida);
    }
    let dif = (sai - ent);
    dif = dif / 1000;
    dif = dif / 60;
    return dif % 60;
  }

  totalHoras() {
    let hora = 0;
    let min = 0;
    this.bancoHoras.forEach(bh => {
      hora += bh.horas;
      min += bh.minutos;
    });

    while (min > 60) {

      hora += 1;
      min -= 60;
    }
    let ret = '';
    if (hora > 0) {
      if (hora > 1) {
        ret += hora + ' Horas';
      } else {
        ret += hora + ' Hora';
      }
    }
    if (min > 0) {
      if (ret !== '') {
        ret += ', ';
      }
      if (min > 1) {
        ret += min + ' Minutos';
      } else {
        ret += min + ' Minuto';
      }
    }
    return ret;
  }


  saldoFormatado(entrada: string, saida: string) {
    const h = this.horasSaldo(entrada, saida);
    const m = this.minutosSaldo(entrada, saida);
    let ret = '';
    if (h > 0) {
      if (h > 1) {
        ret += h + ' Horas';
      } else {
        ret += h + ' Hora';
      }
    }
    if (m > 0) {
      if (ret !== '') {
        ret += ', ';
      }
      if (m > 1) {
        ret += m + ' Minutos';
      } else {
        ret += m + ' Minuto';
      }
    }
    return ret;
  }
}
