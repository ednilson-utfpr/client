import { Perfil } from "../perfil/perfil";

export class Usuario {

  id: number;

  username: string;

  password: string;

  nome: string;

  email: string;

  ativo: boolean;

  perfil: Perfil;

  authorities: any[];
}
