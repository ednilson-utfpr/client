import {Injectable} from '@angular/core';
import {CrudService} from '../generic/crud.service';
import {ItemNota} from './itemNota';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class ItemNotaService extends CrudService<ItemNota, number> {

  constructor(http: HttpClient) {
    super(environment.api + '/itemNota', http);
  }
}
