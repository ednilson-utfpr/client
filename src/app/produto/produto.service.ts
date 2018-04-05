import {Injectable} from '@angular/core';
import {CrudService} from '../generic/crud.service';
import {Produto} from './produto';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class ProdutoService extends CrudService<Produto, number> {

  constructor(http: HttpClient) {
    super(environment.api + '/produto', http);
  }
}
