import {Injectable} from '@angular/core';
import {CrudService} from '../generic/crud.service';
import {Cargo} from './cargo';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class CargoService extends CrudService<Cargo, number> {

  constructor(http: HttpClient) {
    super(environment.api + '/cargo', http);
  }
}
