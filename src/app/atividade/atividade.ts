// import {Obra} from '../obra/obra';

import {Funcionario} from '../funcionario/funcionario';
import {Atributo} from '../atributo/atributo';

export class Atividade {

  id: number;

  // obra: Obra;

  atributo: Atributo[];

  funcionario: Funcionario[];

  descricao: string;

  inicio: Date;

  horaInicial: String;

  fim: Date;

  horaFinal: String;

  inicioPrevisto: Date;

  horaInicialPrevisto: String;

  fimPrevisto: Date;

  horaFinalPrevisto: String;

}

