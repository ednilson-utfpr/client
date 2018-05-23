import {Injectable} from '@angular/core';
import {CrudService} from '../generic/crud.service';
import {Atributof} from './atributof';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class AtributofService extends CrudService<Atributof, number> {

  constructor(http: HttpClient) {
    super(environment.api + '/atributof', http);
  }
}
