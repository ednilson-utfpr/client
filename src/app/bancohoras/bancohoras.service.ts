import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CrudService} from '../generic/crud.service';
import {Cponto} from '../cponto/cponto';
import {environment} from '../../environments/environment';

@Injectable()
export class BancohorasService extends CrudService<Cponto, number> {

  constructor(http: HttpClient) {
    super(environment.api + '/cponto', http);
  }

}
