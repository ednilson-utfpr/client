import {Component, OnInit} from '@angular/core';
import {AtributoService} from './atributo.service';
import {Atributo} from './atributo';
import {ConfirmationService, Message} from 'primeng/api';

@Component({
  templateUrl: './atributo.component.html',
  styleUrls: ['./atributo.component.css']
})
export class AtributoComponent implements OnInit {

  atributos: Atributo[];
  showDialog = false;
  atributoEdit = new Atributo();
  msgs: Message[] = [];

  constructor(private atributoService: AtributoService, private confirmationService: ConfirmationService) {
  }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.atributoService.findAll().subscribe(e => this.atributos = e);
  }

  novo() {
    this.showDialog = true;
    this.atributoEdit = new Atributo();
  }

  salvar() {
    this.atributoService.save(this.atributoEdit).subscribe(e => {
      this.atributoEdit = new Atributo();
      this.findAll();
      this.showDialog = false;
      this.msgs = [{severity:'sucess', summary:'Confirmado', detail:'Registro salvo com sucesso'}];      
    },
    error => {
      this.msgs = [{severity:'error', summary:'Erro', detail:'Certifique-se de preencher todos os campos.'}];
    });
  }

  editar(atributo: Atributo) {
    this.atributoEdit = atributo;
    this.showDialog = true;
    this.msgs = [{severity:'sucess', summary:'Confirmado', detail:'Registro alterado com sucesso'}];
  }

  remover(atributo: Atributo) {
    this.atributoService.delete(atributo.id).subscribe(() => {
      this.findAll();
    });
  }

  confirm(atributo: Atributo) {
    this.confirmationService.confirm({
      header: 'Confirmacao',        
      message: 'Deseja remover o registro?',
      accept: () => {
        this.remover(atributo);
        this.msgs = [{severity:'sucess', summary:'Confirmado', detail:'Registro removido com sucesso'}];
      }
    });
  }
}
