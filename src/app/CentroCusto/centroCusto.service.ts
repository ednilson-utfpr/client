import {Injectable} from '@angular/core';
import {CrudService} from '../generic/crud.service';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {CentroCusto} from './centroCusto';

@Injectable()
export class CentroCustoService extends CrudService<CentroCusto, number> {

  constructor(http: HttpClient) {
    super(environment.api + '/centroCusto', http);
  }
}
