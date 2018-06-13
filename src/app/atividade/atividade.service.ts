import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {CrudService} from '../generic/crud.service';
import {Atividade} from '../atividade/atividade';
import {Injectable} from '@angular/core';

@Injectable()
export class AtividadeService extends CrudService<Atividade, number> {

  constructor(http: HttpClient) {
    super(environment.api + '/atividade', http);
  }
}


