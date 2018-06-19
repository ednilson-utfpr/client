import {Injectable} from '@angular/core';
import {CrudService} from '../generic/crud.service';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Obra} from './obra';

@Injectable()
export class ObraService extends CrudService<Obra, number> {

  constructor(http: HttpClient) {
    super(environment.api + '/obra', http);
  }
}
