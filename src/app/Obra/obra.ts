import {Cliente} from '../cliente/cliente';
import {CentroCusto} from '../CentroCusto/centroCusto';
import {Fornecedor} from '../fornecedor/fornecedor';
import {Cidade} from '../Cidade/cidade';

export class Obra {

  id: number;
  descricao: string;
  idCliente: Cliente;
  idCentroCusto: CentroCusto;
  idFornecedor: Fornecedor;
  idCidade: Cidade;
  inicio: Date;
  fim: Date;
  inicioPrevisto: Date;
  fimPrevisto: Date;
  custoTotal: number;

}
