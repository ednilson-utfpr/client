import {Injectable} from '@angular/core';
import {CrudService} from '../generic/crud.service';
import {Estado} from './estado';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class EstadoService extends CrudService<Estado, number> {

  constructor(http: HttpClient) {
    super(environment.api + '/estado', http);
  }
}
