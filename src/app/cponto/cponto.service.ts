import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {CrudService} from '../generic/crud.service';
import {Cponto} from '../cponto/cponto';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {DatePipe} from '@angular/common';

@Injectable()
export class CpontoService extends CrudService<Cponto, number> {

  constructor(http: HttpClient) {
    super(environment.api + '/cponto', http);
  }
}
