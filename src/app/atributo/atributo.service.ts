import {Injectable} from '@angular/core';
import {CrudService} from '../generic/crud.service';
import {Atributo} from './atributo';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class AtributoService extends CrudService<Atributo, number> {

  constructor(http: HttpClient) {
    super(environment.api + '/atributo', http);
  }
}
