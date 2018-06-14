import {Injectable} from '@angular/core';
import {CrudService} from '../generic/crud.service';
import {Nota} from './nota';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class NotaService extends CrudService<Nota, number> {

  constructor(http: HttpClient) {
    super(environment.api + '/nota', http);
  }
}
