import {Funcionario} from '../funcionario/funcionario';
import {Calendar} from 'primeng/primeng';
import {Time} from '@angular/common';
import DateTimeFormat = Intl.DateTimeFormat;

export class Cponto {

  id: number;

  funcionario: Funcionario;

  data: Date;

  entrada: String;

   saida: String;
  //
  // saldo: number;


}

