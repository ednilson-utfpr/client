import { Nota } from './../nota/nota';
import { Produto } from './../produto/produto';

export class ItemNota {
    
      id: number;
      quantidade: number;
      valorUnitario: number;
      valorTotal: number;
      
      produto: Produto;
      nota: Nota;
}
    