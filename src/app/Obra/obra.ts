import {Cliente} from '../cliente/cliente';
import {Ccusto} from '../ccusto/ccusto';
import {Fornecedor} from '../fornecedor/fornecedor';
import {Cidade} from '../cidade/cidade';

export class Obra {
  id: number;
  descricao: string;
  idCliente: Cliente;
  idCcusto: Ccusto;
  idFornecedor: Fornecedor;
  idCidade: Cidade;
  inicio: Date;
  fim: Date;
  inicioPrevisto: Date;
  fimPrevisto: Date;
  custoTotal: number;

}
