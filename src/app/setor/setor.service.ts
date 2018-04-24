import {Injectable} from '@angular/core';
import {CrudService} from '../generic/crud.service';
import {Setor} from './setor';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class SetorService extends CrudService<Setor, number> {

  constructor(http: HttpClient) {
    super(environment.api + '/setor', http);
  }
}
