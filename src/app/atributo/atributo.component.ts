import {Component, OnInit} from '@angular/core';
import {AtributoService} from './atributo.service';
import {Atributo} from './atributo';
import {Message} from 'primeng/api';
import {LoginService} from '../login/login.service';
import {ConfirmationService} from 'primeng/api';

@Component({
  templateUrl: './atributo.component.html',
  styleUrls: ['./atributo.component.css']
})
export class AtributoComponent implements OnInit {

  atributos: Atributo[];
  showDialog = false;
  showConfirm = false;
  atributoEdit = new Atributo();
  msgs: Message[] = [];

  constructor(private atributoService: AtributoService, private loginService: LoginService, 
  private confirmationService: ConfirmationService) {}


  hasRole(role: string): boolean {
    return this.loginService.hasRole(role);
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

  confirmDelete(atributo: Atributo) {
        this.confirmationService.confirm({
            message: 'Essa ação não poderá ser desfeita',
            header: 'Deseja remover esse registro?',
            accept: () => {
                this.atributoService.delete(atributo.id).subscribe(() => {
                this.findAll();
                this.msgs = [{severity:'sucess', summary:'Confirmado', detail:'Registro removido com sucesso'}];
              });
            }
        });
    }
}
