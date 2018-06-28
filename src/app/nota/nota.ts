import { Cliente } from './../cliente/cliente';
import { ItemNota } from './../itemNota/itemNota';
import { Pessoa } from '../pessoa/pessoa';
export class Nota {

  id: number;
  id_pessoa: number;
  dataEmissao: string;
  dataEntrada: string;
  itensNota: ItemNota[];

}


