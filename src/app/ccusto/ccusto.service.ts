import {Injectable} from '@angular/core';
import {CrudService} from '../generic/crud.service';
import {Ccusto} from './ccusto';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class CcustoService extends CrudService<Ccusto, number> {

  constructor(http: HttpClient) {
    super(environment.api + '/ccusto', http);
  }
}
