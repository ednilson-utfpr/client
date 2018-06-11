import {Injectable} from '@angular/core';
import {CrudService} from '../generic/crud.service';
import {Pessoa} from './pessoa';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class PessoaService extends CrudService<Pessoa, number> {

  constructor(http: HttpClient) {
    super(environment.api + '/pessoa', http);
  }
}
