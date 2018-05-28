import { Setor } from "../setor/setor";
import { Cargo } from "../cargo/cargo";

export class Funcionario {

  id: number;

  matricula: string;

  pessoa: string;

  admissao: string;

  ativo: boolean;

  salario: number;

  setor: Setor;

  cargo: Cargo;



}
